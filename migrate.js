import {createRequire} from "module";

const require=createRequire(import.meta.url);

const {initializeApp,cert}=require("firebase-admin/app");
const {getFirestore}=require("firebase-admin/firestore");
const serviceAccount=require("./serviceAccountKey.json");
const wordData=require("./assets/Datasets/WordData_Full.json");

const app=initializeApp({
    credential:cert(serviceAccount),
    projectId:"impostergame-1f5ff",
});

const db=getFirestore(app);
db.settings({
    host:"firestore.googleapis.com",
    ssl:true,
    preferRest:true,
});

async function migrateWords(){
    console.log(`Starting migration of ${wordData.length} words...`);

    const batchSize=499;
    let totalUploaded=0;

    for(let i=0;i<wordData.length;i+=batchSize){
        const batch=db.batch();
        const chunk=wordData.slice(i,i+batchSize);

        chunk.forEach(entry=>{
            const ref=db.collection("words").doc();
            batch.set(ref,{
                            word:entry.word,
                            category:entry.category,
                            hints:entry.hints.split("|").map(h=>h.trim()),
                        });
        });

        await batch.commit();
        totalUploaded += chunk.length;
        console.log(`Uploaded ${totalUploaded}/${wordData.length} words...`);
    }
    console.log("Migration complete!");
}

// Counting number of words in each genre
async function migrateCounts(){
    console.log("Computing and uploading genre counts...");
    const batch=db.batch();

    const counts=wordData.reduce((acc,entry)=>{
        acc[entry.category]=(acc[entry.category] || 0)+1;
        return acc;
    },{});

    Object.entries(counts).forEach(([category,count])=>{
        const ref=db.collection("counts").doc(category);
        batch.set(ref,{category,count});
    });

    await batch.commit();
    console.log("Counts migration complete!");
    console.log("Counts : ",counts);
}

async function migrate(){
    await migrateWords();
    await migrateCounts();
    console.log("All migrations complete!");
    process.exit(0);
}

migrate().catch(err=>{
    console.error("Migration failed : ",err);
    process.exit(1);
});
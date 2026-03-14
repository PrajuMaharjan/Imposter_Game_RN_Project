import {Asset} from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import Papa from 'papaparse';

let _wordData = null;

export async function loadWordData(){
    if (_wordData) return _wordData;

    const asset=Asset.fromModule(require('../../assets/Datasets/WordData.csv'));
    await asset.downloadAsync();

    const csvString=await FileSystem.readAsStringAsync(asset.loadUri);
    const result=Papa.parse(csvString,{header:true,skipEmptyLines:true,});

    _wordData=result.data.map(row=>({
        id:Number(row.id),
        word:row.word,
        category:row.category,
        hints:row.hints,
    }));
    return _wordData;
}

export async function getWordsByGenre(selectedGenres){
    const data=await loadWordData();
    return data.filter(w=>selectedGenres.includes(w.category));    
}

export async function getRandomWord(selectedGenres){
    const wordpool=await getWordsByGenre(selectedGenres);
    return wordpool[Math.floor(Math.random()*wordpool.length)];
}

export async function getRandomHint(hintsString) {
    const hints=hintsString.split("|");
    return hints[Math.floor(Math.random()*hints.length)];
}

export function getCategoryLabel(categoryId){
    const labels={
        animals: 'Animals',
    fruit:'Fruit',
    food:'Food',
    objects:'Objects',
    famous_people:'Famous People',
    cities:'Cities',
    countries:'Countries',
    health:'Health',
    brands:'Brands',
    games:'Games',
    movies:'Movies',
    sports:'Sports',
    professions:'Professions',
    abstract:'Abstract',
    };
    return labels[categoryId] || categoryId;
}
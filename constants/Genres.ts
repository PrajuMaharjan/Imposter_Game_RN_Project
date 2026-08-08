export type Genre={
    id:string;
    label:string;
    emoji:string;
};

export const WORD_GENRES:Genre[]=[
    {id:'animals',label:'Animals',emoji:'🐾'},
    {id:'fruit',label:'Fruit',emoji:'🍓'},
    {id:'food',label:'Food',emoji:'🍕'},
    {id:'objects',label:'Objects',emoji:'📦'},
    {id:'famous_people',label:'Famous People',emoji:'🌟'},
    {id:'cities',label:'Cities',emoji:'🏙️'},
    {id:'countries',label:'Countries',emoji:'🌍'},
    {id:'health',label:'Health',emoji:'❤️'},
    {id:'brands',label:'Brands',emoji:'🏷️'},
    {id:'games',label:'Games',emoji:'🎮'},
    {id:'movies',label:'Movies',emoji:'🎬'},
    {id:'sports',label:'Sports',emoji:'⚽'},
    {id:'professions',label:'Professions',emoji:'💼'},
    {id:'abstract',label:'Abstract',emoji:'☁️'},
];

export const QUESTION_GENRES:Genre[]=[
    {id:'test',label:'Test',emoji:'🇹'}
];
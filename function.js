let cars = [
    {
        id:1,
        brand:'BMW',
        color:'silver',
        price:'500k $',
        quantity:100,
    },
    {
        id:2,
        brand:'Range Rover',
        color:'red',
        price:'350k $',
        quantity:70,
    },
    {
        id:3,
        brand:'Toyota',
        color:'white',
        price:'100k $',
        quantity:400,
    },
    {
        id:4,
        brand:'Suzuki',
        color:'grey',
        price:'50k $',
        quantity:130,
    },
    {
        id:5,
        brand:'Honda',
        color:'yellow',
        price:'210k $',
        quantity:180,
    },
    {
        id:6,
        brand:'Ford',
        color:'blue',
        price:'180k $',
        quantity:65,
    },
    {
        id:7,
        brand:'Ferrari',
        color:'sports red',
        price:'380k $',
        quantity:125,
    },
    {
        id:8,
        brand:'Mercedes Benz',
        color:'Black',
        price:'400k $',
        quantity:200,
    },
    {
        id:9,
        brand:'Audi',
        color:'green',
        price:'300k $',
        quantity:160,
    },
    {
        id:10,
        brand:'bugatti',
        color:'silver',
        price:'500k $',
        quantity:100,
    },
    {
        id:11,
        brand:'Maserati',
        color:'dark blue',
        price:'360k $',
        quantity:80,
    },
    {
        id:12,
        brand:'Volkswagan',
        color:'midnight blue',
        price:'200k $',
        quantity:140,
    },
    {
        id:13,
        brand:'Volvo',
        color:'Matt black',
        price:'230k $',
        quantity:155,
    },
    {
        id:14,
        brand:'Jeep',
        color:'yellow',
        price:'210k $',
        quantity:110,
    },
    
]

function showData(array,value){
    for(let i=0;i<array.length;i++) {
        console.log(array[i][value]);
    }
    
}

//showing data inside array
// let data = [];
// function showData(array,value){
//     for(let i=0;i<array.length;i++) {
//         data[i]=array[i][value];
//     }
    
// }



// showData(cars,'id');
// showData(cars,'brand');
// showData(cars,'color');
// showData(cars,'price');
// showData(cars,'quantity');

const music = [
    {
        id:1,
        name:'Beat it',
        genre:'rock',
        earning:'10m $',
    },

    {
        id:2,
        name:'How I love you',
        genre:'softcore',
        earning:'8m $',
    },

    {
        id:3,
        name:'Ke jaas re',
        genre:'folk',
        earning:'10k $',
    },

    {
        id:4,
        name:'broken angel',
        genre:'pop',
        earning:'5m $',
    },

    {
        id:5,
        name:'Lonely table',
        genre:'classical',
        earning:'3m $',
    },
]

showData(music,'id');
showData(music,'name');
showData(music,'genre');
showData(music,'earning');


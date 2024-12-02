class employeeData{
    emp1={
        name: 'Rahul',
         empId: 3567,
         mailId: 'mailme@gmail.com',
          Address: {City: 'Vijayawada',
          District: 'Krishna district',
           Pin: 526894,
        },
        Hobbies: ['Netflix', 'Tennis', 'Coding'],

    };
    emp2={
        name: 'Ravi',
        empId: 9867,
        mailId: 'ravimail@gmail.com', 
        Address: {City:  'Guntur', 
        District:  'Prakasham  district',
        Pin: 685479,},
        Hobbies: ['Reading', 'Swimming', 'Baking'],
    };
    emp3={
        name: 'Santosh', 
        empId: 8876,
        mailId: 'santoshmail@gmail.com', 
        Address: {City: 'Warangal', 
        District: 'Hanamkonda district',
         Pin: 996587,
        },
        Hobbies: ['Gym', 'Reading Novels'],
    };
    
    
    emp4={
        name: 'Surya', 
        empId: 3469,
        mailId:'suryamail@gmail.com', 
        Address: {City: 'Nazamabad',District: 'Nazamabad district', Pin: 648597,},
        Hobbies: ['Badminton', 'E-Sports','Netflix'],
        
    };
    emp5={
        name: 'Kiran',
         empId: 8864,
         mailId: 'kirammail@gmail.com',
         Address: {City: 'Karimnagar',District: 'Karimnagar district', Pin: 666954,},
        Hobbies: ['Badminton', 'E-Sports', 'Netflix'],
    };

};
const empData = new employeeData() ;
const body = document.querySelector('#body');
console.log(body);

const mainbox = document.createElement('div');
mainbox.className= 'mainbox';
body.appendChild(mainbox);


Object.keys(empData).map((emp,index)=>{
const empbox = document.createElement('div');
empbox.classNmae =`emp${index+1}`;

const h2=document.createElement('h2');
h2.innerHTML=`Name: ${empData[emp].name}`;


const h3=document.createElement('h3');
h3.innerHTML=`Employee Id: ${empData[emp].empId}`;

const addBox = document.createElement('div');
addBox.className='addressBox';

addBox.innerHTML='<b>Address:';



Object.keys(empData[emp].Address).map((add) => {
    const addComp= document.createElement('p');
    
    addComp.innerHTML=`<b> ${add}:</b>${empData[emp].Address[add]}`;
    addBox.appendChild(addComp);
})



const hobbies=document.createElement('p');
const hobHeading=document.createElement('span');
hobHeading.innerHTML='<strong>Hobbies:<strong>';

hobbies.appendChild(hobHeading);

empData[emp].Hobbies.map((hobby,index)=>{
    const hobbiesLength =empData[emp].Hobbies.length;
    const eachHobby=document.createElement('span');

    if(index + 1 !==hobbiesLength){
        eachHobby.innerHTML=`${hobby},`;
    }
    else{
        eachHobby.innerHTML=`${(hobby)},`;
    }
    hobbies.appendChild(eachHobby);
})


empbox.appendChild(h2);
empbox.appendChild(h3);

empbox.appendChild(addBox);
empbox.appendChild(hobbies);
mainbox.appendChild(empbox);
});
console.log(Object.keys(empData));
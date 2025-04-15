const name=document.querySelector("#courseName");
const categroty=document.querySelector("#courseCategory");
const price=document.querySelector("#coursePrice");
const description=document.querySelector("#courseDescription");
const capacity=document.querySelector("#courseCapacity");
const addBtn=document.querySelector("#click");
//console.log(name,categroty,price,description,capacity,addBtn);

//const courses=[];
let courses=[];
if(localStorage.getItem("courses")!=null){
    courses=JSON.parse(localStorage.getItem("courses"));
    displayCourses();

}



addBtn.addEventListener("click",(e)=>{
    e.preventDefault();
//console.log("hi");
    const course ={
        name:name.value,
        categroty:categroty.value,
        price:price.value,
        description:description.value,
        capacity:capacity.value,
    }
    courses.push(course);
    localStorage.setItem("courses",JSON.stringify(courses));
    //console.log(courses);
    Swal.fire({
        title: "course added!",
        text: "New Course is added!",
        icon: "success"
      });

    displayCourses();

});

function displayCourses() {



    const result=courses.map((course,index)=>{
        return`
        <tr>
        <td>${index + 1}</td>
        <td>${course.name}</td>
        <td>${course.categroty}</td>
        <td>${course.price}</td>
        <td>${course.description}</td>
        <td>${course.capacity}</td>
        </tr>
        `;

    }).join(" ");

    document.querySelector("#data").innerHTML = result;

}



const employeeFormEle = document.getElementById("employee-form");
const firstNameEle = document.getElementById("firstname");
const middleNameEle = document.getElementById("middlename");
const lastNameEle = document.getElementById("lastname");
const dobEle = document.getElementById("dob");
const emailEle = document.getElementById("email");
const maritalStatusEle = document.getElementById("maritalstatus");
const phoneNoEle = document.getElementById("phoneno");
const streetEle = document.getElementById("address");
const cityEle = document.getElementById("city");
const stateEle = document.getElementById("state");
const countryEle = document.getElementById("country");
const zipCodeEle = document.getElementById("zipcode");


async function getEditEmployee() {
    const params = new URLSearchParams( window.location.search);
    const id = params.get("id");

    try{
        let resp = await fetch(`https://curd-app-gy89.onrender.com/employees${id}`);
        let data = await resp.json();
        console.log(data);

        //PRE-FILL INPUT FIELDS
         // PRE-FILL INPUT FIELDS
    firstNameEle.value = data.firstname;
    middleNameEle.value = data.middlename;
    lastNameEle.value = data.lastname;
    dobEle.value = data.dob;
    emailEle.value = data.email;
    maritalStatusEle.value = data.maritalstatus;
    phoneNoEle.value = data.phoneno;
    streetEle.value = data.address.street;
    stateEle.value = data.address.state;
    countryEle.value = data.address.country;
    zipCodeEle.value = data.address.zipcode;
    cityEle.value = data.address.city;
  } catch (error) {
    console.log(error);
    alert("Something went worng ❌");
  }
}

    

window.addEventListener("DOMContentLoaded" , () => {
    getEditEmployee();
});
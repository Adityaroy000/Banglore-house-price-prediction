const bhk_btn = document.querySelectorAll('.bhk-btn');
const bath_btn = document.querySelectorAll('.bath-btn');

window.onload = function(){
    fetch('http://127.0.0.1:5000/get_location_names')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log("Fetched data:", data);
        const locations  = data.locations;
        const select = document.querySelector('.location');

        locations.forEach((location)=>{
            const option = document.createElement('option');
            option.value = location;
            option.textContent = location;
            select.appendChild(option)
        });
    })
    .catch((error)=>{
        console.error("error fetching location:", error);
    });
};

let bhk;
let bath;

bhk_btn.forEach((button)=>{
    button.addEventListener('click',()=>{
        bhk = button.textContent.trim();
        
        bhk_btn.forEach((btn)=>{
            btn.classList.remove('active')
        });
        button.classList.add('active');
    })
});

bath_btn.forEach((button)=>{
    button.addEventListener('click',()=>{
        bath = button.textContent.trim();
        
        bath_btn.forEach((btn)=>{
            btn.classList.remove('active')
        });
        button.classList.add('active');
    })
});

document.querySelector('.price-btn').addEventListener('click',()=>{
    const total_sqft = document.querySelector('.user-input').value;
    const location = document.querySelector('select').value;

    if (!total_sqft || !bhk || !bath || location === "Choose a Location") {
        alert("! Please fill all fields before estimating price.");
        return; 
    }

    fetch('http://127.0.0.1:5000/predict_home_price',{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({location,total_sqft,bhk,bath})
    })
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{        
        document.querySelector('.predicted-price').textContent = data.estimated_price + " Lakhs"; 
    });
})


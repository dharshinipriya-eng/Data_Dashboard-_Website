// Counter Animation
function animateCounter(id, target) {
    let count = 0;
    let speed = target / 100;
    let interval = setInterval(() => {
        count += speed;
        if (count >= target) {
            count = target;
            clearInterval(interval);
        }
        document.getElementById(id).innerText = Math.floor(count);
    }, 20);
}

animateCounter("sales", 15000);
animateCounter("customers", 1200);
animateCounter("profit", 8000);

// Sales Chart (Bar)
const salesC = document.getElementById("salesChart").getContext("2d");
new Chart(salesC, {   // ✅ fixed
    type: "bar",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // ✅ fixed
        datasets: [{
            label: "Sales",
            data: [3000, 4000, 3500, 5000, 7000, 8000],
            backgroundColor: "rgba(56,189,248,0.7)" // ✅ fixed
        }]
    }
});

// Customers Chart (Pie)
const customerC = document.getElementById("customerChart").getContext("2d"); // ✅ fixed name
new Chart(customerC, {  // ✅ fixed
    type: "pie",
    data: {
        labels: ["New", "Returning"], // ✅ fixed
        datasets: [{
            label: "Customers",
            data: [800, 400],  // ✅ fixed
            backgroundColor: ["#38bdf8", "#6366f1"] // ✅ fixed
        }]
    }
});

// Demo mode for the static copy on GitHub Pages (https://gtsulaia09.github.io/alfaVIN/).
// Live decoding needs the server in src/index.js: it downloads the window sticker PDF from FCA, which a browser
// cannot do from another site. Pages serves static files only, so here every VIN shows one illustrative sample
// report, clearly marked as such. On any other host this file does nothing.
(function () {
    if (!location.hostname.endsWith("github.io")) return;
    window.ALFAVIN_DEMO = true;

    const SAMPLE = {
        vin: "ZARFANBN0R7SAMPLE",
        source: "demo-sample",
        year: "2024",
        model: "ALFA ROMEO GIULIA VELOCE AWD",
        engine: "2.0L I-4 DOHC Turbocharged Engine",
        transmission: "8-Speed Automatic Transmission",
        exterior_color: "Alfa Rosso",
        interior_color: "Black / Red Stitching",
        interior_material: "Leather Sport Seats",
        assembly_point: "Cassino, Italy",
        origin: { engine: "Italy", transmission: "Germany" },
        base_price: "51,950",
        destination_charge: "1,595",
        msrp: "58,240",
        warranty: { basic: "4 years / 50,000 miles", powertrain: "4 years / 50,000 miles" },
        packages: [
            { name: "Driver Assistance Dynamic Plus Package", price: "2,200" },
            { name: "Premium Harman Kardon Audio", price: "1,150" },
            { name: "Alfa Rosso Paint", price: "1,345" },
        ],
        options: [
            { category: "PERFORMANCE", features: ["Q4 All-Wheel Drive", "Mechanical Limited-Slip Differential", "Aluminum Paddle Shifters", "Alfa DNA Drive Mode Selector"] },
            { category: "SAFETY & SECURITY", features: ["Forward Collision Warning Plus", "Lane Departure Warning", "Blind-Spot Monitoring", "Rear Cross-Path Detection"] },
            { category: "INTERIOR", features: ["Heated Front Seats", "Heated Steering Wheel", "8.8-inch Touchscreen", "Wireless Charging Pad"] },
            { category: "EXTERIOR", features: ["19-inch Dark Aluminum Wheels", "Red Brake Calipers", "Bi-Xenon Headlamps"] },
        ],
        notices: ["Sample report for the demo — illustrative values, not a real vehicle."],
    };

    window.showDemoReport = function () {
        renderData(SAMPLE);
    };

    document.addEventListener("DOMContentLoaded", function () {
        const box = document.querySelector(".search-box");
        if (!box) return;
        const note = document.createElement("p");
        note.className = "subtitle demo-note";
        note.innerHTML = 'Demo version: live decoding needs the server, so any VIN shows a <strong>sample report</strong>. <a href="#" id="demoSample">Show sample</a>';
        box.insertAdjacentElement("afterend", note);
        document.getElementById("demoSample").addEventListener("click", function (e) {
            e.preventDefault();
            document.getElementById("vinInput").value = SAMPLE.vin;
            window.showDemoReport();
        });
    });
})();

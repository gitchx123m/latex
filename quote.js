function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function calculateTubePrice() {
    const innerDiameter = parseFloat(document.getElementById('tubeInnerDiameter').value);
    const outerDiameter = parseFloat(document.getElementById('tubeOuterDiameter').value);
    const length = parseFloat(document.getElementById('tubeLength').value);
    const density = parseFloat(document.getElementById('tubeDensity').value);
    const quantity = parseInt(document.getElementById('tubeQuantity').value);
    
    // 乳胶管计算公式
    const thickness = (outerDiameter - innerDiameter) / 2;
    const volumePerMeter = Math.PI * (outerDiameter * outerDiameter - innerDiameter * innerDiameter) / 4 * 0.001;
    const weightPerMeter = volumePerMeter * density * 1000;
    const pricePerKg = parseFloat(document.getElementById('tubePricePerKg').value);
    const pricePerMeter = weightPerMeter * pricePerKg / 1000;
    const taxRate = 0.08;
    document.getElementById('tubeResult').innerHTML = 
        `重量: ${weightPerMeter.toFixed(1)}g/米<br>单价: ¥${pricePerMeter.toFixed(2)}元/米<br>含税单价: ¥${(pricePerMeter * (1 + taxRate)).toFixed(2)}元/米`;
}

function calculateSheetPrice() {
    const length = parseFloat(document.getElementById('sheetCircumference').value);
    const width = parseFloat(document.getElementById('sheetWidth').value);
    const thickness = parseFloat(document.getElementById('sheetThickness').value);
    const density = 1; // 密度默认为1
    const quantity = parseInt(document.getElementById('sheetQuantity').value);
    
    // 乳胶片新计算公式
    const area = length * width; // 面积
    const volume = area * thickness; // 立方厘米
    const weight = volume * density; // 克
    const pricePerKg = parseFloat(document.getElementById('sheetPricePerKg').value);
    const pricePerPiece = (weight / 1000) * pricePerKg;
    const taxRate = 0.08;
    document.getElementById('sheetResult').innerHTML = 
        `重量: ${weight.toFixed(2)}g/条<br>单价: ¥${pricePerPiece.toFixed(2)}元/条<br>含税单价: ¥${(pricePerPiece * (1 + taxRate)).toFixed(2)}元/条`;
}

function calculateRingPrice() {
    const circumference = parseFloat(document.getElementById('ringCircumference').value);
    const width = parseFloat(document.getElementById('ringWidth').value);
    const thickness = parseFloat(document.getElementById('ringThickness').value);
    const density = 1; // 密度默认为1
    const quantity = parseInt(document.getElementById('ringQuantity').value);
    
    // 乳胶圈计算公式
    const area = length * width; // 面积
    const volume = area * thickness; // 立方厘米
    const weight = volume * density; // 克
    const pricePerKg = parseFloat(document.getElementById('ringPricePerKg').value);
    const pricePerPiece = (weight / 1000) * pricePerKg;
    const taxRate = 0.08;
    document.getElementById('ringResult').innerHTML = 
        `重量: ${weight.toFixed(2)}g/个<br>单价: ¥${pricePerPiece.toFixed(2)}元/个<br>含税单价: ¥${(pricePerPiece * (1 + taxRate)).toFixed(2)}元/个`;
}

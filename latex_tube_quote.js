function calculateQuote() {
    // 获取输入值
    const innerDiameter = parseFloat(document.getElementById('innerDiameter').value);
    const outerDiameter = parseFloat(document.getElementById('outerDiameter').value);
    const length = parseFloat(document.getElementById('length').value);
    const density = parseFloat(document.getElementById('density').value);
    const quantity = parseInt(document.getElementById('quantity').value);
    const pricePerKg = parseFloat(document.getElementById('pricePerKg').value);

    // 验证输入
    if (isNaN(innerDiameter) || isNaN(outerDiameter) || isNaN(length) || 
        isNaN(density) || isNaN(quantity) || isNaN(pricePerKg)) {
        alert('请输入有效的数值');
        return;
    }

    // 计算截面积 (mm²)
    const area = Math.PI * (Math.pow(outerDiameter/2, 2) - Math.pow(innerDiameter/2, 2));
    
    // 计算体积 (cm³)
    const volume = (area * length * 1000) / 1000; // 转换为cm³
    
    // 计算重量 (g)
    const weight = volume * density; // 转换为g
    
    // 计算总价
    const totalPrice = (weight / 1000) * pricePerKg * quantity;

    // 显示结果
    document.getElementById('result').innerHTML = 
        `重量: ${weight.toFixed(2)} g<br>
        总价: ${totalPrice.toFixed(2)} 元`;
}
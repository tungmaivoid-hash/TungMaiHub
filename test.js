// Test script to check if the updated excel.html works
console.log('Testing excel.html...');

// Check if DOM elements exist
const input = document.getElementById("input");
const preview = document.getElementById("preview");
const status = document.getElementById("status");
const sendBtn = document.getElementById("send-btn");

console.log('DOM elements check:');
console.log('input:', !!input);
console.log('preview:', !!preview);
console.log('status:', !!status);
console.log('sendBtn:', !!sendBtn);

// Check if functions exist
console.log('Functions check:');
console.log('processInput:', typeof processInput === 'function');
console.log('addImageToPreview:', typeof addImageToPreview === 'function');
console.log('isExcelData:', typeof isExcelData === 'function');

// Test isExcelData function
const testData = "Tên\tGiá\tDiện tích\nCăn A\t2 tỷ\t80m2";
console.log('Test isExcelData:', isExcelData(testData));

console.log('Test completed successfully!');
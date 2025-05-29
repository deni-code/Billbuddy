function calculateSplit() {
    const billAmount = parseFloat(document.getElementById('billAmount').value) || 0;
    const taxRate = parseFloat(document.getElementById('taxRate').value) || 0;
    const tipPercent = parseFloat(document.getElementById('tipPercent').value) || 0;
    const numPeople = parseInt(document.getElementById('numPeople').value) || 1;

    if (billAmount <= 0 || numPeople < 1) {
        alert('Please enter a valid bill amount and number of people.');
        return;
    }

    const taxAmount = billAmount * (taxRate / 100);
    const tipAmount = billAmount * (tipPercent / 100);
    const totalBill = billAmount + taxAmount + tipAmount;
    const perPerson = totalBill / numPeople;

    document.getElementById('totalBill').textContent = `$${totalBill.toFixed(2)}`;
    document.getElementById('perPerson').textContent = `$${perPerson.toFixed(2)}`;
    document.getElementById('result').style.display = 'block';
}

function shareResult() {
    const totalBill = document.getElementById('totalBill').textContent;
    const perPerson = document.getElementById('perPerson').textContent;
    const shareText = `SplitEasy Result:\nTotal Bill (with Tax & Tip): ${totalBill}\nAmount per Person: ${perPerson}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'SplitEasy Result',
            text: shareText
        }).catch(err => {
            alert('Error sharing result: ' + err);
        });
    } else {
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Result copied to clipboard!');
        }).catch(err => {
            alert('Error copying to clipboard: ' + err);
        });
    }
}

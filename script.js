// Calculator functionality
function calculateInflation() {
    const initialAmount = parseFloat(document.getElementById('initial-amount').value);
    const inflationRate = parseFloat(document.getElementById('inflation-rate').value);
    const years = parseInt(document.getElementById('years').value);
    const resultDiv = document.getElementById('result');

    // Validation
    if (isNaN(initialAmount) || isNaN(inflationRate) || isNaN(years)) {
        resultDiv.innerHTML = '<h3>Error</h3><p>Por favor, ingresa valores válidos en todos los campos.</p>';
        resultDiv.className = 'result-section show';
        resultDiv.style.background = 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)';
        return;
    }

    if (initialAmount <= 0 || years <= 0) {
        resultDiv.innerHTML = '<h3>Error</h3><p>El monto inicial y los años deben ser mayores a cero.</p>';
        resultDiv.className = 'result-section show';
        resultDiv.style.background = 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)';
        return;
    }

    // Calculate future value with inflation
    const futureValue = initialAmount * Math.pow((1 + inflationRate / 100), years);
    const lossOfValue = initialAmount - (initialAmount / Math.pow((1 + inflationRate / 100), years));
    const realValue = initialAmount / Math.pow((1 + inflationRate / 100), years);

    // Format numbers with appropriate currency
    const formatter = new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: getCurrencyCode(),
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    // Display results
    resultDiv.innerHTML = `
        <h3>Resultado del Cálculo de Inflación</h3>
        <div style="margin: 1rem 0;">
            <p><strong>Monto Inicial:</strong> ${formatter.format(initialAmount)}</p>
            <p><strong>Tasa de Inflación:</strong> ${inflationRate}% anual</p>
            <p><strong>Período:</strong> ${years} año${years > 1 ? 's' : ''}</p>
        </div>
        <div style="border-top: 2px solid rgba(255,255,255,0.3); padding-top: 1rem; margin-top: 1rem;">
            <p><strong>Valor Real Futuro:</strong> ${formatter.format(realValue)}</p>
            <p><strong>Pérdida de Valor:</strong> ${formatter.format(lossOfValue)}</p>
            <p><strong>Poder Adquisitivo:</strong> ${((realValue / initialAmount) * 100).toFixed(2)}%</p>
        </div>
        <div style="margin-top: 1rem; padding: 1rem; background: rgba(255,255,255,0.1); border-radius: 5px;">
            <p style="font-size: 0.9rem;">Tu dinero tendrá el mismo poder adquisitivo que ${formatter.format(realValue)} hoy.</p>
        </div>
    `;
    
    resultDiv.className = 'result-section show';
    resultDiv.style.background = 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)';
}

// Get currency code based on current page
function getCurrencyCode() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    switch(currentPage) {
        case 'index.html':
            return 'ARS'; // Argentina Peso
        case 'calculadora-ipc-chile.html':
            return 'CLP'; // Chilean Peso
        case 'colombia.html':
            return 'COP'; // Colombian Peso
        case 'mexico.html':
            return 'MXN'; // Mexican Peso
        case 'paraguay.html':
            return 'PYG'; // Paraguayan Guarani
        case 'peru.html':
            return 'PEN'; // Peruvian Sol
        case 'uruguay.html':
            return 'UYU'; // Uruguayan Peso
        case 'united-state.html':
            return 'USD'; // US Dollar
        default:
            return 'ARS'; // Default to Argentina
    }
}

// Country dropdown navigation
function redirectToCountry() {
    const dropdown = document.getElementById('country-dropdown');
    const selectedValue = dropdown.value;
    
    if (selectedValue && selectedValue !== window.location.pathname.split('/').pop()) {
        window.location.href = selectedValue;
    }
}

// Add enter key support for calculator
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('#initial-amount, #inflation-rate, #years');
    
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculateInflation();
            }
        });
    });

    // Add smooth scrolling to CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            // Add a slight delay for visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    }

    // Add number formatting on input
    const amountInput = document.getElementById('initial-amount');
    if (amountInput) {
        amountInput.addEventListener('input', function(e) {
            // Remove non-numeric characters except decimal point
            let value = e.target.value.replace(/[^0-9.]/g, '');
            
            // Ensure only one decimal point
            const parts = value.split('.');
            if (parts.length > 2) {
                value = parts[0] + '.' + parts.slice(1).join('');
            }
            
            e.target.value = value;
        });
    }

    // Set focus on first input for better UX
    if (document.getElementById('initial-amount')) {
        document.getElementById('initial-amount').focus();
    }
});
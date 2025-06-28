// Make sure that the document document is fully loaded
document.addEventListener('DOMContentLoaded',function()
{
    // Loader Logic with optional percentage counter
        window.addEventListener('load', function() {
            // Optional: Simulate loading with percentage counter
            let percent = 0;
            const percentElement = document.getElementById('loadingPercent');
            
            const loadingInterval = setInterval(function() {
                percent += Math.random() * 15;
                if (percent > 100) percent = 100;
                
                if (percentElement) {
                    percentElement.textContent = Math.round(percent) + '%';
                }
                
                if (percent >= 100) {
                    clearInterval(loadingInterval);
                    
                    // Hide loader after a short delay
                    setTimeout(function() {
                        const loader = document.getElementById('loader');
                        const mainContent = document.getElementById('mainContent');
                        
                        loader.classList.add('hidden');
                        mainContent.classList.add('loaded');
                        
                        setTimeout(function() {
                            loader.style.display = 'none';
                        }, 500);
                    }, 500);
                }
            }, 100);
        });

    // finding items from html file 
    const Wieght1 = 
    document.getElementById('percent-item1');
    const Mark1 = 
    document.getElementById('mark-item1');

    const Wieght2 = 
    document.getElementById('percent-item2');
    const Mark2 = 
    document.getElementById('mark-item2');

    const Display = 
    document.getElementById('result-dp');

    const calculateBtn =
    document.getElementById('calculate-btn');

    const clearBtn =
    document.getElementById('clear-btn')

    const addRow = 
    document.getElementById('add-row-btn')
    // const addRow =
    // document.getElementById('add-row-btn');

let rowCount = 2;
    // button add button


    calculateBtn.addEventListener( 'click',function()
{


   // Start with zero total
               let total = 0;

    // Calculate for ALL rows (original + added ones)
               for(let i = 1; i <= rowCount; i++) {
                   const percentInput = document.getElementById('percent-item' + i);
                   const markInput = document.getElementById('mark-item' + i);
                   
                   if(percentInput && markInput) {
                       const percent = parseFloat(percentInput.value) || 0;
                       const mark = parseFloat(markInput.value) || 0;
                       total += (percent/100) * mark;
                   }
               }


   Display.textContent ="Result: "+total.toFixed(2)+"%";


});

// Clear button 

clearBtn.addEventListener('click', function()
{
// Clear the result display
        Display.textContent = "";
        
        // Clear the original two rows
        document.getElementById('percent-item1').value ='';
        document.getElementById('mark-item1').value ='';
        document.getElementById('percent-item2').value ='';
        document.getElementById('mark-item2').value ='';
        
        // Remove all dynamically added rows (rows 3 and above)
        const container = document.getElementById('input-container');
        for(let i = 3; i <= rowCount; i++) {
            const percentElement = document.getElementById('percent-item' + i);
            const markElement = document.getElementById('mark-item' + i);
            
            if(percentElement && markElement) {
                // Remove the parent divs that contain the label and input
                percentElement.parentElement.remove();
                markElement.parentElement.remove();
            }
        }
        
        // Reset row count to original 2 rows
        rowCount = 2;
        
        // Clear any other inputs that might exist (like percentInput and markInput)
        const percentInput = document.getElementById('percentInput');
        const markInput = document.getElementById('markInput');
        if(percentInput) percentInput.value = '';
        if(markInput) markInput.value = '';
})

// Add row functionality
            addRow.addEventListener('click',function()
            {
                rowCount++; // Increase row count
                
                const container = document.getElementById('input-container');
                
                // Create percentage input
                const percentDiv = document.createElement('div');
                const percentLabel = document.createElement('label');
                percentLabel.className = 'labels';
                percentLabel.textContent = 'Percentage';
                percentLabel.setAttribute('for', 'percent-item' + rowCount);
                
                const percentInput = document.createElement('input');
                percentInput.type = 'number';
                percentInput.className = 'input-text';
                percentInput.id = 'percent-item' + rowCount;
                
                percentDiv.appendChild(percentLabel);
                percentDiv.appendChild(percentInput);
                
                // Create mark input
                const markDiv = document.createElement('div');
                const markLabel = document.createElement('label');
                markLabel.className = 'labels';
                markLabel.textContent = 'Mark';
                markLabel.setAttribute('for', 'mark-item' + rowCount);
                
                const markInput = document.createElement('input');
                markInput.type = 'number';
                markInput.className = 'input-text';
                markInput.id = 'mark-item' + rowCount;
                
                markDiv.appendChild(markLabel);
                markDiv.appendChild(markInput);
                
                // Add both divs to the container
                container.appendChild(percentDiv);
                container.appendChild(markDiv);
            })

});

      
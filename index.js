document.addEventListener('DOMContentLoaded', () => {

    const initRangeSliders = () => {

        const sumValueFrom = document.querySelector('#sum-from');
        const sumValueTo = document.querySelector('#sum-to');
        const durationValueFrom = document.querySelector('#duration-from');
        const durationValueTo = document.querySelector('#duration-to');

        const trackSum = function (data) {
            sumValueFrom.textContent = data.from;
            sumValueTo.textContent = data.to;
        };

        const trackDuration = function (data) {
            durationValueFrom.textContent = data.from;
            durationValueTo.textContent = data.to;
        };


        $(".item-ranges__sum-slider").ionRangeSlider({
            type: "single",
            min: 0,
            max: 165000,
            from: 0,
            grid: false,
            hide_min_max: true,
            hide_from_to: true,
            onStart: trackSum,
            onChange: trackSum,
            onFinish: trackSum,
            onUpdate: trackSum 
        });

        $(".item-ranges__duration-slider").ionRangeSlider({
            type: "single",
            min: 2,
            max: 12,
            from: 0,
            grid: false,
            hide_min_max: true,
            hide_from_to: true,
            onStart: trackDuration,
            onChange: trackDuration,
            onFinish: trackDuration,
            onUpdate: trackDuration 
        });

    };

    const initMasks = () => {

        window.addEventListener("DOMContentLoaded", function() {
            [].forEach.call( document.querySelectorAll('input[type="tel"]'), function(input) {
              var keyCode;
              function mask(event) {
                event.keyCode && (keyCode = event.keyCode);
                var pos = this.selectionStart;
                if (pos < 3) event.preventDefault();
                var matrix = "+7 (___) ___ ____",
                    i = 0,
                    def = matrix.replace(/\D/g, ""),
                    val = this.value.replace(/\D/g, ""),
                    new_value = matrix.replace(/[_\d]/g, function(a) {
                        return i < val.length ? val.charAt(i++) : a
                    });
                i = new_value.indexOf("_");
                if (i != -1) {
                    i < 5 && (i = 3);
                    new_value = new_value.slice(0, i)
                }
                var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                    function(a) {
                        return "\\d{1," + a.length + "}"
                    }).replace(/[+()]/g, "\\$&");
                reg = new RegExp("^" + reg + "$");
                if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                  this.value = new_value;
                }
                if (event.type == "blur" && this.value.length < 5) {
                  this.value = "";
                }
              }
          
              input.addEventListener("input", mask, false);
              input.addEventListener("focus", mask, false);
              input.addEventListener("blur", mask, false);
              input.addEventListener("keydown", mask, false);
          
            });
          
        });
        
    };

    const initCountDown = () => {

        const duration = 60;
        const element = document.getElementById('countdown-value');


        const startCountdown = (duration, element) =>{
            let timer = duration, minutes, seconds;
    
            const interval = setInterval(() => {
                minutes = Math.floor(timer / 60);
                seconds = timer % 60;
    
                seconds = seconds < 10 ? '0' + seconds : seconds;
    
                element.textContent = minutes + ":" + seconds;
    
                if (--timer < 0) {
                    clearInterval(interval);
                    element.textContent = "00:00";
                }
            }, 1000);
        };
    
    
        startCountdown(duration, element);

    };

    const initBufferCopy = () => {

        const copyButtons = document.querySelectorAll(".item-copy__button");
        const copyValues = document.querySelectorAll('.item-copy__value');

        copyButtons.forEach((button, buttonIndex) => {

            button.addEventListener("click", function() {

                copyValues.forEach((value, valueIndex) => {

                    if (buttonIndex === valueIndex) {

                        navigator.clipboard.writeText(value.innerText).then(function() {
                            console.log('Text copied to clipboard');
                        }).catch(function(error) {
                            console.error('Error:', error);
                        });
                    };
                });
            
            });
        });
    };

    initMasks();
    initRangeSliders();
    initCountDown();
    initBufferCopy();
});

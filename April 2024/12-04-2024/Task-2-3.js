
    let applyButton = document.getElementById("applyButton");

    function f1() {
        const customButton = document.getElementById("customButton");
        if (!customButton) {
            console.error("Button with id 'customButton' not found.");
            return;
        }

        let bgColor = document.getElementById("bgColorInput").value;
        let fontColor = document.getElementById("fontColorInput").value;
        let fontSize = document.getElementById("fontSizeInput").value + "px";
        let fontWeight = document.getElementById("fontWeightInput").value;
        let padding = document.getElementById("paddingInput").value + "px";
        let borderRadius = document.getElementById("borderRadiusInput").value + "px";

        customButton.style.backgroundColor = bgColor;
        customButton.style.color = fontColor;
        customButton.style.fontSize = fontSize;
        customButton.style.fontWeight = fontWeight;
        customButton.style.padding = padding;
        customButton.style.borderRadius = borderRadius;
    };

   (function()
    {
        // called when the document completly loaded
        function onload()
        {
            var textTextArea = document.getElementById('textTextArea');      
            var printButton = document.getElementById('printButton');

            // prints the label
            printButton.onclick = function()
            {
                try
                {
                    // open label
                    var labelXmlTemplate = '<?xml version="1.0" encoding="utf-8"?>\
                                                <DieCutLabel Version="8.0" Units="twips">\
                                                  <PaperOrientation>Landscape</PaperOrientation>\
                                                  <Id>FileFolder</Id>\
                                                  <PaperName>30327 File Folder - offset</PaperName>\
                                                  <DrawCommands>\
                                                    <RoundRectangle X="0" Y="0" Width="806" Height="4950" Rx="180" Ry="180"/>\
                                                  </DrawCommands>\
                                                  <ObjectInfo>\
                                                    <TextObject>\
                                                      <Name>Text</Name>\
                                                      <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
                                                      <BackColor Alpha="0" Red="255" Green="255" Blue="255"/>\
                                                      <LinkedObjectName></LinkedObjectName>\
                                                      <Rotation>Rotation0</Rotation>\
                                                      <IsMirrored>False</IsMirrored>\
                                                      <IsVariable>True</IsVariable>\
                                                      <HorizontalAlignment>Center</HorizontalAlignment>\
                                                      <VerticalAlignment>Middle</VerticalAlignment>\
                                                      <TextFitMode>ShrinkToFit</TextFitMode>\
                                                      <UseFullFontHeight>True</UseFullFontHeight>\
                                                      <Verticalized>False</Verticalized>\
                                                      <StyledText>\
                                                        <Element>\
                                                          <String>KLENK, AUSTIN - 17</String>\
                                                          <Attributes>\
                                                            <Font Family="Arial" Size="18" Bold="False" Italic="False" Underline="False" Strikeout="False"/>\
                                                            <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
                                                          </Attributes>\
                                                        </Element>\
                                                      </StyledText>\
                                                    </TextObject>\
                                                    <Bounds X="345" Y="101" Width="4380" Height="647.8"/>\
                                                  </ObjectInfo>\
                                                </DieCutLabel>';

                    var printXml = '<?xml version="1.0" encoding="utf-8"?>\
                                            <LabelWriterPrintParams>\
                                              <Copies>1</Copies>\
                                              <JobTitle></JobTitle>\
                                              <FlowDirection>LeftToRight</FlowDirection>\
                                              <PrintQuality>Auto</PrintQuality>\
                                              <TwinTurboRoll>Right</TwinTurboRoll>\
                                            </LabelWriterPrintParams>';

                    console.log(printXml)
                    var label = dymo.label.framework.openLabelXml(labelXmlTemplate);

                    // set label text
                    label.setObjectText("Text", textTextArea.value);               
                    // select printer to print on
                    // for simplicity sake just use the first LabelWriter printer
                    var printerName = "DYMO LabelWriter 450 Twin Turbo";

                    dymo.label.framework.printLabel("DYMO LabelWriter 450 Twin Turbo", printXml, label, "")
                    // location.href=location.href;
                }
                catch(e)
                {
                    alert(e.message || e);
                }
            }
        };

        // register onload event
        if (window.addEventListener)
            window.addEventListener("load", onload, false);
        else if (window.attachEvent)
            window.attachEvent("onload", onload);
        else
            window.onload = onload;

    } ());

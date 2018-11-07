   (function()
    {
        // called when the document completly loaded
        function onload()
        {
            var firstName = document.getElementById('keyTextFirst');
            var lastName = document.getElementById('keyTextLast');
            var make = document.getElementById('keyTextMake');   
            var model = document.getElementById('keyTextModel');          
            var printButton = document.getElementById('KeyPrintButton');

            // prints the label
            printButton.onclick = function()
            {
                try
                {
                    // open label
                    var labelXmlTemplate = '<?xml version="1.0" encoding="utf-8"?>\
                                      <DieCutLabel Version="8.0" Units="twips" MediaType="Default">\
                                        <PaperOrientation>Portrait</PaperOrientation>\
                                        <Id>Jewelry30299</Id>\
                                        <PaperName>30299 Jewelry Label - offset</PaperName>\
                                        <DrawCommands>\
                                          <Path>\
                                            <FillMode>EvenOdd</FillMode>\
                                            <Line X1="90" Y1="0" X2="990" Y2="0"/>\
                                            <Arc CenterX="990" CenterY="90" Radius="90" StartAngle="90" EndAngle="0"/>\
                                            <LineTo X="1080" Y="180"/>\
                                            <LineTo X="1980" Y="180"/>\
                                            <LineTo X="1980" Y="90"/>\
                                            <Arc CenterX="2070" CenterY="90" Radius="90" StartAngle="180" EndAngle="90"/>\
                                            <LineTo X="2970" Y="0"/>\
                                            <Arc CenterX="2970" CenterY="90" Radius="90" StartAngle="90" EndAngle="0"/>\
                                            <LineTo X="3060" Y="540"/>\
                                            <Arc CenterX="2970" CenterY="540" Radius="90" StartAngle="0" EndAngle="-90"/>\
                                            <LineTo X="2070" Y="630"/>\
                                            <Arc CenterX="2070" CenterY="540" Radius="90" StartAngle="-90" EndAngle="-180"/>\
                                            <LineTo X="1980" Y="450"/>\
                                            <LineTo X="1080" Y="450"/>\
                                            <LineTo X="1080" Y="540"/>\
                                            <Arc CenterX="990" CenterY="540" Radius="90" StartAngle="0" EndAngle="-90"/>\
                                            <LineTo X="90" Y="630"/>\
                                            <Arc CenterX="90" CenterY="540" Radius="90" StartAngle="-90" EndAngle="-180"/>\
                                            <LineTo X="0" Y="90"/>\
                                            <Arc CenterX="90" CenterY="90" Radius="90" StartAngle="180" EndAngle="90"/>\
                                          </Path>\
                                          <Path>\
                                            <FillMode>EvenOdd</FillMode>\
                                            <Line X1="90" Y1="630" X2="990" Y2="630"/>\
                                            <Arc CenterX="990" CenterY="720" Radius="90" StartAngle="90" EndAngle="0"/>\
                                            <LineTo X="1080" Y="810"/>\
                                            <LineTo X="1980" Y="810"/>\
                                            <LineTo X="1980" Y="720"/>\
                                            <Arc CenterX="2070" CenterY="720" Radius="90" StartAngle="180" EndAngle="90"/>\
                                            <LineTo X="2970" Y="630"/>\
                                            <Arc CenterX="2970" CenterY="720" Radius="90" StartAngle="90" EndAngle="0"/>\
                                            <LineTo X="3060" Y="1170"/>\
                                            <Arc CenterX="2970" CenterY="1170" Radius="90" StartAngle="0" EndAngle="-90"/>\
                                            <LineTo X="2070" Y="1260"/>\
                                            <Arc CenterX="2070" CenterY="1170" Radius="90" StartAngle="-90" EndAngle="-180"/>\
                                            <LineTo X="1980" Y="1080"/>\
                                            <LineTo X="1080" Y="1080"/>\
                                            <LineTo X="1080" Y="1170"/>\
                                            <Arc CenterX="990" CenterY="1170" Radius="90" StartAngle="0" EndAngle="-90"/>\
                                            <LineTo X="90" Y="1260"/>\
                                            <Arc CenterX="90" CenterY="1170" Radius="90" StartAngle="-90" EndAngle="-180"/>\
                                            <LineTo X="0" Y="720"/>\
                                            <Arc CenterX="90" CenterY="720" Radius="90" StartAngle="180" EndAngle="90"/>\
                                          </Path>\
                                        </DrawCommands>\
                                        <ObjectInfo>\
                                          <TextObject>\
                                            <Name>Text4</Name>\
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
                                                <String>Text4</String>\
                                                <Attributes>\
                                                  <Font Family="Arial" Size="12" Bold="False" Italic="False" Underline="False" Strikeout="False"/>\
                                                  <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
                                                </Attributes>\
                                              </Element>\
                                            </StyledText>\
                                          </TextObject>\
                                          <Bounds X="1977.6" Y="700.8" Width="1022.4" Height="475.2"/>\
                                        </ObjectInfo>\
                                        <ObjectInfo>\
                                          <TextObject>\
                                            <Name>Text2</Name>\
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
                                                <String>Text2</String>\
                                                <Attributes>\
                                                  <Font Family="Arial" Size="12" Bold="False" Italic="False" Underline="False" Strikeout="False"/>\
                                                  <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
                                                </Attributes>\
                                              </Element>\
                                            </StyledText>\
                                          </TextObject>\
                                          <Bounds X="1977.6" Y="86.4" Width="1022.4" Height="458.4"/>\
                                        </ObjectInfo>\
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
                                                <String>Text</String>\
                                                <Attributes>\
                                                  <Font Family="Arial" Size="12" Bold="False" Italic="False" Underline="False" Strikeout="False"/>\
                                                  <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
                                                </Attributes>\
                                              </Element>\
                                            </StyledText>\
                                          </TextObject>\
                                          <Bounds X="57.6" Y="86.4" Width="907.2" Height="462.6"/>\
                                        </ObjectInfo>\
                                        <ObjectInfo>\
                                          <TextObject>\
                                            <Name>Text3</Name>\
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
                                                <String>Text3</String>\
                                                <Attributes>\
                                                  <Font Family="Arial" Size="12" Bold="False" Italic="False" Underline="False" Strikeout="False"/>\
                                                  <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
                                                </Attributes>\
                                              </Element>\
                                            </StyledText>\
                                          </TextObject>\
                                          <Bounds X="57.6" Y="734.4" Width="907.2" Height="417.6"/>\
                                        </ObjectInfo>\
                                      </DieCutLabel>';


                    var printParamsXml = '<?xml version="1.0" encoding="utf-8"?>\
                                            <LabelWriterPrintParams>\
                                              <Copies>1</Copies>\
                                              <JobTitle></JobTitle>\
                                              <FlowDirection>LeftToRight</FlowDirection>\
                                              <PrintQuality>Auto</PrintQuality>\
                                              <TwinTurboRoll>Left</TwinTurboRoll>\
                                            </LabelWriterPrintParams>';

                    var label = dymo.label.framework.openLabelXml(labelXmlTemplate);

                    console.log(printParamsXml)
                    // set label text
                    label.setObjectText("Text", firstName.value); 
                    label.setObjectText("Text2", lastName.value);
                    label.setObjectText("Text3", make.value); 
                    label.setObjectText("Text4", model.value);  
                    
                    var printerName = "DYMO LabelWriter 450 Twin Turbo";

                    dymo.label.framework.printLabel("DYMO LabelWriter 450 Twin Turbo", printParamsXml, label, "")

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

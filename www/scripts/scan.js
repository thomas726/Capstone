function scan() {
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            if (!result.cancelled) {

                //scan barcode to get upc
                
                
                                             
            }
            else {
                alert("You have cancelled scan");
            }
        },

        
        

        function (error) {
            alert("Scanning failed: " + error);
        }
                
    );
    upc: result.text;
    return upc;
}
return scan;


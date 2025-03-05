import fs from 'fs';

const instrukceFile = 'instrukce.txt';

fs.readFile(instrukceFile, (err, data) => {
    if (err) {
        console.error(`Soubor '${instrukceFile}' neexistuje nebo nejde přečíst.`);
        return;
    }
    
    const lines = data.toString().trim().split('\n'); 
    if (lines.length < 2) {
        console.error(`Soubor '${instrukceFile}' musí obsahovat dva řádky (zdrojový a cílový soubor).`);
        return;
    }

    const vstupFile = lines[0].trim();
    const vystupFile = lines[1].trim();
    
    fs.readFile(vstupFile, (err, content) => { 
        if (err) {
            console.error(`Zdrojový soubor '${vstupFile}' neexistuje nebo nejde přečíst.`);
            return;
        }
        
        fs.writeFile(vystupFile, content, (err) => { 
            if (err) {
                console.error(`Chyba při zápisu do souboru '${vystupFile}':`, err.message);
            } else {
                console.log(`Obsah souboru '${vstupFile}' byl zkopírován do '${vystupFile}'.`);
            }
        });
    });
});

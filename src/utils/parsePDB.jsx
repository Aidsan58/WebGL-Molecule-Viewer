function ParsePDB(text) {
    const atoms = [];

    // define element color based on CPK values https://en.wikipedia.org/wiki/CPK_coloring
    const elementColors = {
        C: 0xc8c8c8, // gray
        O: 0xff0000, // red
        N: 0x8f8fff, // light blue
        H: 0xffffff, // white
        S: 0xffff00, // yellow
        P: 0xffa500, // orange
        NA: 0x0000FF, // blue
        CL: 0x00FF00, // green
        FE: 0xBE5103, // orange
        CA: 0xA9A9A9, // dark grey
        BR: 0x964B00, // brown
        MG: 0x228B22, // forest green
    };

    // define element radii -- radii are in angstroms
    const elementRadii = {
        C: 1.7,
        O: 1.52,
        N: 1.55,
        H: 1.2,
        S: 1.8,
        P: 1.8,
        NA: 2.26,
        CL: 1.75,
        FE: 1.94,
        CA: 1.97,
        BR: 1.85,
        MG: 1.73,
    };

    // Split the content by common line breaks (Windows and Unix)
    text.split("\n").forEach((line) => {
        if (line.startsWith("ATOM")) {
            var element = line.substr(76, 2).trim();
            let x = parseFloat(line.substr(30, 8));
            let y = parseFloat(line.substr(38, 8));
            let z = parseFloat(line.substr(46, 8));
            atoms.push({
                element,
                position: [x, y, z],
                color: elementColors[element] || 0xffffff, // set element to white if there is no matching element in map
                radius: elementRadii[element] || 1.5, // set radius to 1.5 if there is no matching element
            });
        }
        
    });
    return atoms;
}

export default ParsePDB;
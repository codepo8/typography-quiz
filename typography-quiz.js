    const elements = document.querySelector('#elements');
    const information = {
        'e1': 'tittle',
        'e2': 'shoulder',
        'e3': 'aperture',
        'e4': 'stem',
        'e5': 'spur',
        'e6': 'axis',
        'e7': 'shoulder',
        'e8': 'ascender',
        'e9': 'descender',
        'e10': 'finial',
        'e11': 'crossbar',
        'e12': 'bowl',
        'e13': 'terminal',
        'e14': 'terminal',
        'e15': 'loop',
        'e16': 'link/neck',
        'e17': 'ear',
        'e18': 'tail',
        'e19': 'crossbar',
        'e20': 'apex',
        'e21': 'vertex',
        'e22': 'overhang',
        'e23': 'apex',
        'e24': 'apex',
        'e25': 'beak',
        'e26': 'joint',
        'e27': 'bracket',
        'e28': 'bracket',
        'e29': 'crossbar',
        'e30': 'arc',
        'e31': 'bilateral serif',
        'e32': 'bilateral serif',
        'e33': 'foot',
        'e34': 'counter (closed)',
        'e35': 'hairline (stroke)',
        'e36': 'crotch',
        'e37': 'leg',
        'e38': 'arm',
        'e39': 'bowl',
        'e40': 'eye',
        'e41': 'counter (open)',
        'e42': 'arm',
        'e43': 'stress',
        'e44': 'serif',
        'e45': 'ligature',
        'e46': 'beak',
        'e47': 'spine',
        'e48': 'head serif',
        'e49': 'head serif'
    }
    const createdrop = () => {
        let dropoptions = new Set(
            Object.values(information)
        );
        let str = `<select>
            <option>${[...dropoptions].sort().join('</option><option>')}</option>
            </select>`;
        return str;
    }
    console.log(createdrop());
    elements.addEventListener('click',(ev) => {
        if (ev.target.nodeName.toLowerCase() === 'path' || 
           ev.target.nodeName.toLowerCase() === 'polygon') {
            console.log(information[ev.target.id]);
        ev.preventDefault();
    }

    });
    
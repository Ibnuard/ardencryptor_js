function encZp(str) {
    const sp = str.split('')
    let temp = []
    for (let i = 0; i < sp.length; i++) {
        if (Number(sp[i]) === 1) {
            temp.push('s0ar2')
        } else if (Number(sp[i]) === 2) {
            temp.push('d1ur4')
        } else if (Number(sp[i]) === 3) {
            temp.push('t2ir6')
        } else if (Number(sp[i]) === 4) {
            temp.push('e3mr8')
        } else if (Number(sp[i]) === 5) {
            temp.push('l4ir0')
        } else if (Number(sp[i]) === 6) {
            temp.push('e5nr2')
        } else if (Number(sp[i]) === 7) {
            temp.push('t6ur4')
        } else if (Number(sp[i]) === 8) {
            temp.push('d7er6')
        } else if (Number(sp[i]) === 9) {
            temp.push('s8er8')
        } else if (Number(sp[i]) === 0) {
            temp.push('e9zr0')
        }
    }

    let gn = []
    let gp = []

    for (let i = 0; i < temp.length; i++) {
        if (i % 2 === 0) {
            gp.push(temp[i])
        } else {
            gn.push(temp[i])
        }
    }

    return gn.concat('17hairwih01btciuc02').concat(gp).join('')
}
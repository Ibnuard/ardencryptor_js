function dcZp(ar) {
    let i, re
    let gn = []
    let gp = []

    re = ar.replace('17hairwih01btciuc02', ',').split(',')

    for (i = 0; i < re[0].length; i += 5) {
        a = re[0].substring(i, i + 5)
        gn.push(a)
    }

    for (i = 0; i < re[1].length; i += 5) {
        a = re[1].substring(i, i + 5)
        gp.push(a)
    }

    function de(a) {
        let i
        let res = []

        for (i = 0; i < a.length; i++) {
            if (a[i] === 's0ar2') {
                res.push(1)
            } else if (a[i] === 'd1ur4') {
                res.push(2)
            } else if (a[i] === 't2ir6') {
                res.push(3)
            } else if (a[i] === 'e3mr8') {
                res.push(4)
            } else if (a[i] === 'l4ir0') {
                res.push(5)
            } else if (a[i] === 'e5nr2') {
                res.push(6)
            } else if (a[i] === 't6ur4') {
                res.push(7)
            } else if (a[i] === 'd7er6') {
                res.push(8)
            } else if (a[i] === 's8er8') {
                res.push(9)
            } else if (a[i] === 'e9zr0') {
                res.push(0)
            }
        }
        return res
    }

    function fd(gp, gn) {
        let i
        let res = ''
        let le = gp.length > gn.length ? gp.length : gn.length

        for (i = 0; i < le; i++) {
            res = gn[i] ? res + (gn[i]) : res + ''
            res = gp[i] ? res + (gp[i]) : res + ''
        }

        return res
    }

    return fd(de(gn), de(gp))
}
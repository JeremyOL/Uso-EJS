const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('template', {
        BODY: 'index',
        Title: 'Usando EJS'
    });
});

router.get('/form', (req, res) => {
    res.render('template', {
        BODY: 'addUserForm',
        Title: 'Añadir usuario'
    });
});

router.post('/form', (req, res) => {
    console.log(req.body);
    res.send("<meta http-equiv='refresh' content='0'>");
});

module.exports = router;
const router = require('express').Router();
let Condition = require('../models/condition.model');

router.route('/').get((req, res) => {
    Condition.find()
        .then(conditions => res.json(conditions))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const condition = req.body.condition;
    const symptoms = req.body.symptoms;
    const description = req.body.description;
    const treatment = req.body.description;

    const newCondition = new Condition({
        condition,
        symptoms,
        description,
        treatment,
    });

    newCondition,save()
    .then(() => res.json('Condition added!'))
    .catch(err => res.status(400).json('Error: ' + err));
    });
      // Get request
      router.route('/:id').get((req, res) => {
        Condition.findById(req.params.id)
          .then(condition => res.json(condition))
          .catch(err => res.status(400).json('Error: ' + err));
      });
      // Delete request
      router.route('/:id').delete((req, res) => {
        Condition.findByIdAndDelete(req.params.id)
          .then(() => res.json('Condition deleted.'))
          .catch(err => res.status(400).json('Error: ' + err));
      });
      // Update request
      router.route('/update/:id').post((req, res) => {
        Condition.findById(req.params.id)
          .then(condition => {
            // this just means the name of the condition
            condition.condition = req.body.condition;
            condition.symptoms = req.body.symptoms;
            condition.description = req.body.description;
            condition.treatment = req.body.treatment;
      
            condition.save()
              .then(() => res.json('Condition updated!'))
              .catch(err => res.status(400).json('Error: ' + err));
          })
          .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;


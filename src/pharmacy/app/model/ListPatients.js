Ext.define('RaxaEmr.Pharmacy.model.ListPatients', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'uuid',
        type: 'string'
    }, {
        name: 'display',
        type: 'string'
    }, {
        name: 'age',
        type: 'number'
    }, {
        name: 'gender',
        type: 'string'
    }, {
        name: 'encounters',
        model: 'RaxaEmr.Pharmacy.model.Encounter'
    }]
})

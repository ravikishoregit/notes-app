//const validator=require('validator')
//const chalk= require('chalk')
const yargs= require('yargs')
//const getNotes= require('./notes.js')


//const msg= getNotes()
yargs.version("1.1.0")

//console.log(process.argv)
//console.log(yargs.argv)
//console.log(chalk.blue('hello world'))

 yargs.command({
    command : 'add',
    describe: 'to do the addition',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'the body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title:',argv.title)
    }

})


yargs.command({
    command:'removing a note',
    describe: 'alll gone',
    handler: function (){
        console.log('remove')
    }
})

yargs.command ({
    command: 'read',
    describe: 'reading the note...',
    builder:{

    },
    handler: function (){
        console.log('reading from note X')
    }
})

yargs.command ({
    command: 'list',
    describe: 'describe the note',
    handler: function (){
        console.log('consoling the requirement and reading from the list')
    }
})
yargs.parse()
//console.log(yargs.argv)

 //const add = require('./utils.js')
//const fs=require('fs')
//fs.appendFileSync('notes.txt','i am an idiot!')
//console.log(add(1,3))
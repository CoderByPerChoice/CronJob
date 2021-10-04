const schedule = require('node-schedule');

//At a particular date time
const scheduleDate = new Date('2021-09-26T19:23:00.000+5:30');
schedule.scheduleJob(scheduleDate, () => {
    console.log('Job ran at ' + new Date().toString());
});

//At recurring interval
//https://crontab.guru/ Cron tab guru site for help on cron expressions.
//Below code will run every 2 seconds.
//schedule.scheduleJob('m-job', '*/2 * * * * *', () => {
const mJob = schedule.scheduleJob('*/2 * * * * *', () => {
    console.log('I ran');
    //schedule.cancelJob('m-job');
    mJob.cancel();
})

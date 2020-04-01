const sgMail=require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail= (email,name) =>{
    sgMail.send({
        to:email,
        from:'sinha.diptanshu10@gmail.com',
        subject:'Thanks for joining in',
        text: 'Welcome to the app, '+name+ '. Let me know how you get along with the app.'
    })

}

const sendCancelEmail= (email,name)=>{
    sgMail.send({
        to:email,
        from:'sinha.diptanshu10@gmail.com',
        subject:'You sucked anyways',
        text:'Good bye. You will not find a better app than me, '+name+'.'
    })
}
module.exports={
    sendWelcomeEmail,
    sendCancelEmail
}

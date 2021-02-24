import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function About(props){
    return(
        <div>
            <Hero title={props.title}/>
            <Content>
                <p>Hello, my name is Mitchell. I'm a college/university student taking the Georgian/Lakehead Computer Science course. Since I am still in school, I have been exposed to many different languages. I have experience React, Java, Kotlin, C, C++, C#, ASP.NET and MySQL.</p>
                
                <p>My current goals are to get my first co-op job in the computer science industry and win my first hackathon!</p>

                <p>I'm always learning new things, currently such things include gaining more experience with React by creating fun websites like this one, or creating small apps using Java/Kotlin on Android Studio. I also have just started looking into Node JS and Express JS which I am very excited to learn.</p>

                <p>When I'm not working on school, learning something new, or working on a project, I turn to my favorite hobby, eSports. Recently I just joined the eSports team for Georgian College where I represent Georgian on Counter-Strike Global Offensive.</p>
            </Content>
        </div>     
    );
}

export default About;
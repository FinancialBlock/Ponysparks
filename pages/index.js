import Head from 'next/head';
import React from 'react';
import { useState } from 'react';
import styles from './index.module.css';
import Rap from './components/Rap';

export default function Home() {
    const [subject, setSubject] = useState('math');
    const [question, setQuestion] = useState('What is 1+1');
    const [loading, setLoading] = useState(false);

    const [result, setResult] = useState('');


    async function onSubmit(event) {
        event.preventDefault();
        if (loading) {
            return;
        }
        setLoading(true);
        setResult('');
        const response = await fetch('/api/question', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ subject, question }),
        });
        const data = await response.json();

        // Parse the result and extract the answer
        const resultParts = data.result.split(' ');
        const answerIndex = resultParts.indexOf('is') + 1;
        const answer = resultParts[answerIndex];

        // Modify the result to include the answer in bold
        const modifiedResult = resultParts
            .map((part, i) => {
                if (i === answerIndex) {
                    return `<strong>${part}</strong>`;
                }
                return part;
            })
            .join(' ');
        setResult(modifiedResult);

        setLoading(false);
    }

    return (
        <div>
            {/*<ul id="Rap" className="Rap">*/}
            {/*    <li data-tab="rap" data-selected="true">Rap</li>*/}
            {/*</ul>*/}
            <Head>
                <title>Whiz Explore</title>
                <link rel="icon" href="/public/dog.png" />
            </Head>


            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#explore">Explore</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#profile"><img src="path/to/profile-icon.png" alt="Profile"/></a></li>
                </ul>
            </nav>

            <main className={styles.main}>
            <h3>Whiz Explore 💡</h3>
            <form onSubmit={onSubmit}>
                <label>What subject is your question?</label>

                <select
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                >
                    <option value="math">Math</option>
                    <option value="coupons, discount, active coupons airbnb, hack airbnb">Coup</option>
                    <option value="history">History</option>
                    <option value="english">English</option>
                    <option value="business">Business</option>
                    <option value="coding, java, fix, github, react-native, react, typescript, python,">Coding</option>
                    <option value="biology">Biology</option>
                    <option value="law">Law</option>
                    <option value="science">Science</option>
                    <option value="airlines">Airlines</option>
                    <option value="discounts, codes, active">Discounts</option>
                    <option value="cyber security, social media scams, phishing, best practices, educator, robinhood finance, social media marketing, public relations, christmas ">Scams</option>
                    <option value="finance">Finance</option>
                    <option value="nba stats">NBA Stats</option>
                    <option value="openapi">Openapi</option>
                    <option value="poems, rhyme">poem</option>
                    <option value="work, team, lesson plan">work</option>
                    <option value="music, lyrics, ghost writer">lyrics</option>
                    <option value="https://robinhood.com/us/en/invest/, margin, invest in cash sweep, 2022">robinhood</option>

                </select>

                <label>Question</label>
                <input
                    type="text"
                    name="question"
                    placeholder="Enter the question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />

                <input type="submit" value="Ask your question here!" />
                <div
                    className={styles.result}
                    dangerouslySetInnerHTML={{ __html: result }}
                />
            </form>
                {loading && (
                    <div>
                        <h3>MyTutor💡</h3>
                        <img src="/loading.gif" className={styles.loading} />
                    </div>
                )}

        </main>
</div>
);
}
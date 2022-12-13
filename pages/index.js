import Head from 'next/head';
import React from 'react';
import { useState } from 'react';
import styles from './index.module.css';

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
        setResult(data.result.replaceAll('\n', '<br />'));
        setLoading(false);
    }

    return (
        <div>
            <Head>
                <title>OpenAI Quickstart</title>
                <link rel="icon" href="/public/dog.png" />
            </Head>

            <main className={styles.main}>
            <h3>TutorRUs💡</h3>
            <form onSubmit={onSubmit}>
                <label>What subject is your question?</label>
                <select
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                >
                    <option value="math">Math</option>
                    <option value="history">History</option>
                    <option value="english">English</option>
                    <option value="business">Business</option>
                    <option value="coding">Coding</option>
                    <option value="law">Law</option>
                    <option value="science">Science</option>
                    <option value="finance">Finance</option>
                    <option value="nba stats">NBA Stats</option>
                    <option value="openapi">Openapi</option>
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
            </form>
                {loading && (
                    <div>
                        <h3>MyTutor💡</h3>
                        <img src="/loading.webp" className={styles.loading} />
                    </div>
                )}
            <div
                className={styles.result}
                dangerouslySetInnerHTML={{ __html: result }}
            />
        </main>
</div>
);
}
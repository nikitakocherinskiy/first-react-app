import React, { useState } from 'react'
import axios from 'axios'
import styles from './Articles.module.scss'
import Header from '../Header/Header'

const Articles = () => {
	const [posts, setPosts] = useState([])
	const [loading, setLoading] = useState(true)

	React.useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axios.get(
					'https://jsonplaceholder.typicode.com/posts'
				)

				setPosts(data)
			} catch (error) {
				console.log(error)
			}

			setLoading(false)
		}
		fetchData()
	}, [])

	return (
		<div>
			<Header />
			<div style={{ padding: '20px 40px' }}>
				<h1>Articles</h1>

				{loading && 'Loading ...'}
				<div className={styles.wrapper}>
					{posts.map(post => {
						return (
							<div key={post.id} className={styles.card}>
								<h4>{post.title}</h4>
								<p>{post.body}</p>
								<a href='/'>Read now</a>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Articles

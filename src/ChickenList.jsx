import Chicken from "./Chicken"
import { useStore } from "./hooks"

export default function ChickenList(props) {
	const [count] = useStore(store => store.count)
	return (
		<div {...props}>
			{count > 0 ?
				<>
					<p>Chickens: {count}</p>
					{ new Array(count)
						.fill(null)
						.map((v, k) => <Chicken key={k} size={60} />)
					}
				</>
				:
				<p>The coop is empty :(</p>
			}
		</div>
	)
}
const { useState, useReducer } = React;

const appState = {
	searchResults: [],
	searchStatus: 0, //0-no search in progress;1-fetching data;2-fetched
};
const reducer = (state, action) => {};
function App({}) {
	const [state, dispatch] = useReducer(reducer, appState);
	return (
		<>
			<div class='d-flex flex-column gap-2'>
				<Navbar />
				<ProductResults products={state['searchResults']} />
				{/* <div className='my-2 btn btn-outline-primary rounded-pill px-4'>View more</div> */}
			</div>
		</>
	);
}

function Navbar() {
	return (
		<nav class='navbar bg-body-tertiary d-flex p-2 flex-nowrap px-4'>
			<a class='navbar-brand flex-grow-0 ' href='#'>
				<img src='../assets/slash.png' alt='Slash-logo' width='auto' height='32' />
			</a>
			<form
				class='d-flex flex-grow-1'
				role='search'
				onSubmit={e => {
					e.preventDefault();
					console.log('form submitted');
					//TODO - fetch products using api and update the relevant state variables
				}}>
				<input
					class='form-control me-2 rounded-pill'
					type='search'
					placeholder='What are you looking for today ?'
					aria-label='Search'
				/>
				<button class='btn btn-outline-success rounded-pill' type='submit'>
					Search
				</button>
			</form>
		</nav>
	);
}

function FilterBar({}) {
	return (
		<>
			<div className='d-inline-flex gap-2 justify-content-start'>
				<button type='button' class='btn btn-outline-primary rounded-pill'>
					Clear filters
				</button>
				<Filter
					type='SORT'
					title='Sort By'
					iconName='swap-vertical-outline'
					options={['Price', 'Marketplace', 'Ratings']}
				/>

				<Filter
					type='RANGE'
					title='Price'
					iconName='cash-outline'
					options={['Price', 'Marketplace', 'Ratings']}
				/>
			</div>
		</>
	);
}

function Filter({ type, title, options, iconName }) {
	//TODO - add state management for selected option
	const [selectedIndex, setSelectedIndex] = useState(-1);
	const [sortOrder, setSortOrder] = useState(0); //0: unsorted, -1: ascending, 1: descending
	const [range, setRange] = useState([0, 100, 0]); //min,max,selected
	const [filterText, setFilterText] = useState('');

	if (selectedIndex > -1 && sortOrder === 0) {
		setSortOrder(-1);
	}

	function getDropdownContentBasedOnType({ type, title, options, iconName }) {
		switch (type) {
			case 'SORT':
				return (
					<>
						<li class='dropdown-item'>
							<div class='form-check'>
								<input
									class='form-check-input'
									type='radio'
									name='radioSortOrder'
									id={title + 'radioAscending'}
									checked={sortOrder === -1}
									onChange={e => setSortOrder(-1)}
								/>
								<label class='form-check-label' for='radioSortOrder'>
									Low to High
								</label>
							</div>
						</li>

						<li class='dropdown-item'>
							<div class='form-check'>
								<input
									class='form-check-input'
									type='radio'
									name='radioSortOrder'
									id={title + 'radioDescending'}
									checked={sortOrder === 1}
									onChange={e => setSortOrder(1)}
								/>
								<label class='form-check-label' for='radioSortOrder'>
									High to Low
								</label>
							</div>
						</li>
						<li>
							<hr class='dropdown-divider' />
						</li>
						{options.map((i, index) => (
							<li class='dropdown-item' key={type + index + 'li'}>
								<div class='form-check'>
									<input
										class='form-check-input'
										type='radio'
										name={title + 'radio'}
										id={title + 'radio' + index + type}
										checked={selectedIndex === index}
										onChange={e => setSelectedIndex(index)}
									/>
									<label
										class='form-check-label'
										for={title + 'radio' + index + type}>
										{i}
									</label>
								</div>
							</li>
						))}
					</>
				);
			case 'RANGE':
				console.log(range);
				return (
					<>
						<li class='dropdown-item fs-6'>
							<div class='input-group mb-3'>
								<span class='input-group-text'>Min</span>

								<input
									type='text'
									class='form-control'
									aria-label='Dollar amount (with dot and two decimal places)'
									value={range[0]}
									onChange={e =>
										setRange([Math.max(e.target.value, 0), range[1], range[2]])
									}
									placeholder='Min'
								/>
							</div>

							<div class='input-group'>
								<input
									type='number'
									class='form-control'
									aria-label='Dollar amount (with dot and two decimal places)'
									value={range[1]}
									onChange={e =>
										setRange([
											range[0],
											Math.min(e.target.value, Number.MAX_SAFE_INTEGER),
											range[2],
										])
									}
									placeholder='max'
								/>
								<span class='input-group-text'>Max</span>
							</div>
						</li>
					</>
				);
			default:
				console.log('default dropdown');
				return <></>;
		}
	}

	console.log(filterText);
	return (
		<div class='btn-group'>
			<button type='button' class='btn btn-outline-secondary text-center rounded-start-pill'>
				<ion-icon name={iconName} class='me-2'></ion-icon>
				{title}
			</button>
			<button
				type='button'
				class='btn btn-outline-secondary dropdown-toggle dropdown-toggle-split rounded-end-circle'
				data-bs-toggle='dropdown'
				aria-expanded='false'>
				<span class='visually-hidden'>Toggle Dropdown</span>
			</button>
			<ul class='dropdown-menu w-auto'>
				{getDropdownContentBasedOnType({ type, title, options, iconName })}
			</ul>
		</div>
	);
}

function ProductResults(props) {
	return (
		<div className='container-fluid d-flex flex-column gap-2 px-4'>
			<FilterBar />
			<h3>Search Results</h3>
			<div className='d-inline-flex flex-wrap justify-content-between gap-2'>
				{props.products &&
					props.products.length > 0 &&
					props.products.map(p => {
						const rw = Math.round(100 + Math.random() * 1000);
						const rh = Math.round(100 + Math.random() * 1000);
						return (
							<ProductCard
								key={p.marketplace + '#' + p.title}
								title={p.title.substring(0, 20)}
								rating={p.rating}
								imgSrc={`https://picsum.photos/${rw}/${rh}`}
								marketplace={p.marketplace}
								price={p.price}
								currency={p.currency}
								productURL={p.productURL}
							/>
						);
					})}
			</div>
		</div>
	);
}

function ProductCard({ title, rating, imgSrc, marketplace, price, currency, productURL }) {
	const finalRating = Math.round(rating);
	return (
		<div
			class='card'
			style={{ minWidth: 'min-content', maxWidth: '240px', overflow: 'hidden' }}>
			<div class='card-body text-truncate text-nowrap' style={{ minWidth: '0' }}>
				<img
					src={imgSrc}
					class='card-img-top img-responsive'
					alt={title + ' from ' + marketplace}
					style={{ width: '240px', height: '280px', objectFit: 'cover' }}
				/>
				<h5
					class='card-title text-truncate '
					style={{ minWidth: '0px', maxWidth: '240px' }}>
					{title}
				</h5>
				<p class='card-text p-0 m-0'>
					<div class='ratings'>
						<span class='me-2 review-count fs-6 text-body-secondary'>{rating}</span>
						{Array(5)
							.fill()
							.map((_e, i) => i < finalRating)
							.map(v =>
								v ? (
									<ion-icon name='star'></ion-icon>
								) : (
									<ion-icon name='star-outline'></ion-icon>
								)
							)}
						<span class='ms-2 review-count fs-6 text-body-secondary'>
							{parseFloat(Math.random() * 10).toFixed(1) + 'k'}
						</span>
					</div>
				</p>
			</div>
		</div>
	);
}

function Search() {
	return <input type='text' placeholder='What are you looking for?' />;
}

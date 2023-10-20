const { useState, useReducer, useRef } = React;
const SERVER_URL = 'http://127.0.0.1:5000/';

const reducer = (state, { type, data }) => {
	switch (type) {
		case 'UPDATE_PRODUCTS':
			console.log('updated products', data);
			return { ...state, searchResults: data };
		case 'UPDATE_SEARCH_STATUS':
			console.log('updated search status', data);
			return { ...state, searchStatus: data.status, searchResCode: data.resCode };
		case 'ADD_FILTER':
			console.log('adding filter: ', data);
			return { ...state, filters: { ...state['filters'], ...data } };
		default:
			console.log('Unknown action: ' + action);
			return state;
	}
};
function App({}) {
	const appState = {
		searchResults: [],
		searchStatus: 0, //0-no search in progress;1-fetching data;2-fetched
		searchResCode: -1, //this would be the httpStatusCode of the previous response
		filters: {}, //key->filter function
	};
	const [state, dispatch] = useReducer(reducer, appState);
	console.log({ state });
	return (
		<>
			<div class='d-flex flex-column gap-2'>
				<Navbar searchStatus={state.searchStatus} dispatch={dispatch} />
				<ProductResults searchResults={state.searchResults} dispatch={dispatch} />
				{/* <div className='my-2 btn btn-outline-primary rounded-pill px-4'>View more</div> */}
			</div>
		</>
	);
}

function Spinner({ sm }) {
	return (
		<div class={`spinner-border ${sm ? 'spinner-border-sm' : ''}`} role='status'>
			<span class='visually-hidden'>Loading...</span>
		</div>
	);
}

function Toast({ message }) {
	return (
		<div
			class='toast align-items-center text-bg-primary border-0'
			role='alert'
			aria-live='assertive'
			aria-atomic='true'>
			<div class='d-flex'>
				<div class='toast-body'>{message}</div>
				<button
					type='button'
					class='btn-close btn-close-white me-2 m-auto'
					data-bs-dismiss='toast'
					aria-label='Close'></button>
			</div>
		</div>
	);
}

function Icon({ name, classes }) {
	return <ion-icon name={name} class={classes ? classes : ''}></ion-icon>;
}

function Navbar({ searchStatus, dispatch }) {
	const queryRef = useRef('');
	const [isLoading, setIsLoading] = useState(false);
	return (
		<nav class='navbar bg-body-tertiary d-flex p-2 flex-nowrap px-4'>
			<a class='navbar-brand flex-grow-0 ' href='#'>
				<img src='../assets/slash.png' alt='Slash-logo' width='auto' height='32' />
			</a>
			<form
				class='d-flex flex-grow-1'
				role='search'
				onSubmit={async e => {
					e.preventDefault();
					console.log('target value: ', queryRef.current);
					if (
						(searchStatus == 0 || searchStatus == 2) &&
						queryRef.current &&
						queryRef.current.trim().length > 0
					) {
						dispatch({ type: 'UPDATE_SEARCH_STATUS', data: '1' });
						setIsLoading(true);
						try {
							const data = await fetchProducts(queryRef.current);
							dispatch({ type: 'UPDATE_PRODUCTS', data });
							dispatch({
								type: 'UPDATE_SEARCH_STATUS',
								data: { status: '2', resCode: 200 },
							});
						} catch (error) {
							console.log(error);
							Toast({ message: error });
							dispatch({ type: 'UPDATE_PRODUCTS', data: [] });
							dispatch({
								type: 'UPDATE_SEARCH_STATUS',
								data: { status: '2', resCode: 500 },
							});
						} finally {
							setIsLoading(false);
						}
					}
				}}>
				<input
					class='form-control me-2 rounded-pill'
					type='search'
					placeholder='What are you looking for today ?'
					aria-label='Search'
					onChange={e => (queryRef.current = e.target.value)}
				/>
				<button
					class='btn btn-outline-success rounded-pill'
					type='submit'
					disabled={isLoading}>
					{isLoading ? Spinner({ sm: true }) : 'Search'}
				</button>
			</form>
		</nav>
	);
}

function FilterBar({ dispatch }) {
	return (
		<>
			<div className='d-inline-flex gap-2 justify-content-start'>
				<Filter
					type='SORT'
					title='Sort By'
					iconName='swap-vertical-outline'
					options={['Price', 'Marketplace', 'Ratings']}
					dispatch={dispatch}
				/>
				<Filter
					type='RANGE'
					title='Price'
					iconName='cash-outline'
					dispatch={dispatch}
					objProperty='price'
				/>
			</div>
		</>
	);
}

function Filter({ type, title, options, iconName, objProperty, dispatch }) {
	const initialConditions = {
		selectedIndex: -1,
		sortOrder: 0,
		range: [0, Number.MAX_SAFE_INTEGER, false],
	};
	const [conditions, setConditions] = useState(initialConditions);

	function updateCondition(current, attribute, newValue) {
		const nc = { ...current };
		nc[attribute] = newValue;
		return nc;
	}

	function isEmpty(obj) {
		return Object.keys(obj).length === 0;
	}

	function getDropdownContentBasedOnType() {
		const filterFunction = e => e;
		const data = {};
		const filterKey = `${type}:${title}`;
		data[filterKey] = filterFunction;

		switch (type) {
			case 'SORT':
				if (conditions.selectedIndex > -1 && conditions.sortOrder === 0) {
					setConditions(c => updateCondition(c, 'sortOrder', -1));
				}

				if (conditions.selectedIndex > -1 && conditions.sortOrder != 0) {
					const filterAttribute = options[selectedIndex];
					const ascendingFilterFunction = (a, b) => {
						if (a[filterAttribute] > b[filterAttribute]) return 1;
						else if (a[filterAttribute] < b[filterAttribute]) return -1;
						return 0;
					};

					const descendingFilterFunction = (a, b) => {
						if (a[filterAttribute] > b[filterAttribute]) return 1;
						else if (a[filterAttribute] < b[filterAttribute]) return -1;
						return 0;
					};
					data[filterKey] =
						sortOrder == -1 ? ascendingFilterFunction : descendingFilterFunction;
					dispatch({ type: 'ADD_FILTER', data });
				} else {
					dispatch({ type: 'ADD_FILTER', data });
				}
				return (
					<>
						<li class='dropdown-item'>
							<div class='form-check'>
								<input
									class='form-check-input'
									type='radio'
									name='radioSortOrder'
									id={title + 'radioAscending'}
									checked={
										!isEmpty(conditions) &&
										conditions.sortOrder === -1 &&
										conditions.selectedIndex > -1
									}
									onChange={e =>
										setConditions(c => updateCondition(c, 'sortOrder', -1))
									}
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
									checked={
										!isEmpty(conditions) &&
										conditions.sortOrder === 1 &&
										conditions.selectedIndex > -1
									}
									onChange={e =>
										setConditions(c => updateCondition(c, 'sortOrder', 1))
									}
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
										checked={
											!isEmpty(conditions) &&
											conditions.selectedIndex === index
										}
										onChange={e =>
											setConditions(c =>
												updateCondition(c, 'selectedIndex', index)
											)
										}
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
				data[filterKey] = p =>
					p[objProperty] >= conditions.range[0] && p[objProperty] <= conditions.range[1];
				dispatch({ type: 'ADD_FILTER', data });
				return (
					<>
						<li class='dropdown-item fs-6'>
							<div class='input-group mb-3'>
								<span class='input-group-text'>Min</span>

								<input
									type='text'
									class='form-control'
									aria-label='Dollar amount (with dot and two decimal places)'
									value={!isEmpty(conditions) ? conditions.range[0] : 0}
									onChange={e => {
										if (e.target.value < conditions['range'][1])
											setConditions(c =>
												updateCondition(c, 'range', [
													Math.max(e.target.value, 0),
													c.range[1],
													c.range[2],
												])
											);
									}}
									placeholder='Min'
								/>
							</div>

							<div class='input-group'>
								<input
									type='number'
									class='form-control'
									aria-label='Dollar amount (with dot and two decimal places)'
									value={!isEmpty(conditions) ? conditions.range[1] : 100}
									onChange={e => {
										if (conditions['range'][0] < e.target.value)
											setConditions(c =>
												updateCondition(conditions, 'range', [
													c.range[0],
													Math.min(
														e.target.value,
														Number.MAX_SAFE_INTEGER
													),
													c.range[2],
												])
											);
									}}
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
				{getDropdownContentBasedOnType()}
				<li>
					<hr class='dropdown-divider' />
				</li>
				<li class='dropdown-item fs-6'>
					<button
						type='button'
						class='btn btn-danger btn-sm rounded-pill'
						onClick={_e => setConditions({})}>
						Clear Filter
					</button>
				</li>
			</ul>
		</div>
	);
	//TODO - set a unified constraints state object instead of individual state variables
}

function ProductResults({ searchResults, dispatch }) {
	const products = searchResults;
	if (products && products.length > 0) {
		return (
			<div className='container-fluid d-flex flex-column gap-2 px-4'>
				<FilterBar dispatch={dispatch} />
				<h3>Search Results</h3>
				<div className='d-inline-flex flex-wrap justify-content-between gap-2'>
					{products &&
						products.length > 0 &&
						products.map(p => {
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
	} else {
		return (
			<div className='container-fluid d-flex flex-grow-1 justify-contents-center align-items-middle flex-column gap-2 px-4 text-center '>
				<img
					src='../assets/search.svg'
					class='img-fluid mx-auto d-block w-25'
					alt='Search to find results'
				/>
				<span class='text-body-secondary'>Search for a product to see results</span>
			</div>
		);
	}
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

async function fetchProducts(query) {
	// const response = await fetch(`${SERVER_URL}/search`, {
	// 	method: 'POST',
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 	},
	// 	body: JSON.stringify({ product_name: query }),
	// });
	// const res = await response.json();
	// console.log(res);
	return mockProducts;
}

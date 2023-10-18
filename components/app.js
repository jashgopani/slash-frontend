function App({}) {
	return (
		<>
			<div class='d-flex flex-column gap-2'>
				<Navbar />
				<FilterBar />
				<ProductResults products={mockProducts} />
				<div className='my-2 btn btn-outline-primary rounded-pill'>View more</div>
			</div>
		</>
	);
}

function Navbar() {
	return (
		<nav class='navbar bg-body-tertiary d-flex p-2 flex-nowrap '>
			<a class='navbar-brand flex-grow-0 ' href='#'>
				<img src='../assets/slash.png' alt='Slash-logo' width='auto' height='32' />
			</a>
			<form class='d-flex flex-grow-1' role='search'>
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

function FilterBar() {
	return (
		<div class='d-flex justify-content-between'>
			<div className='d-flex gap-2 flex-grow-1 justify-content-start'>
				<Filter
					type='DROPDOWN'
					title='Sort By'
					options={['Price', 'Marketplace', 'Ratings']}
				/>
				<Filter
					type='DROPDOWN'
					title='Sort By'
					options={['Price', 'Marketplace', 'Ratings']}
				/>
				<Filter
					type='DROPDOWN'
					title='Sort By'
					options={['Price', 'Marketplace', 'Ratings']}
				/>
				<Filter
					type='DROPDOWN'
					title='Sort By'
					options={['Price', 'Marketplace', 'Ratings']}
				/>
			</div>
			<div className='flex-shrink-0'>
				<button type='button' class='btn btn-primary rounded-pill'>
					clear filters
				</button>
			</div>
		</div>
	);
}

function Filter(props) {
	//TODO - add state management for selected option
	switch (props.type) {
		case 'DROPDOWN':
			const defaultIndex = props.default ? props.default : 0;
			return (
				<div class='btn-group flex-shrink-0'>
					<button
						type='button'
						class='btn btn-outline-secondary dropdown-toggle rounded-pill'
						data-bs-toggle='dropdown'
						aria-expanded='false'>
						{props.title}
					</button>
					<ul class='dropdown-menu'>
						<div class='form-check'>
							{props.options.map((i, index) => (
								<li key={i} class='dropdown-item'>
									<input
										class='form-check-input'
										type='radio'
										name={i}
										id={i}
										checked={index === defaultIndex}
									/>
									<label class='form-check-label' for='flexRadioDefault1'>
										{i}
									</label>
								</li>
							))}
						</div>
					</ul>
				</div>
			);
		default:
			return <></>;
	}
}

function ProductResults(props) {
	return (
		<div className='container-fluid'>
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
				<p class='card-text text-truncate'>
					<div class='ratings'>
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
						<span class='mx-2 review-count fs-6 fw-lighter text-secondary'>12</span>
					</div>
				</p>
			</div>
		</div>
	);
}

function Search() {
	return <input type='text' placeholder='What are you looking for?' />;
}

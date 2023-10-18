function App({}) {
	return (
		<>
			<div class='d-flex flex-column'>
				<Navbar />
				<FilterBar />
				<ProductResults products={mockProducts} />
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
			<form class='searchbar d-flex flex-grow-1' role='search'>
				<input
					class='form-control me-2'
					type='search'
					placeholder='What are you looking for today ?'
					aria-label='Search'
				/>
				<button class='btn btn-outline-success' type='submit'>
					Search
				</button>
			</form>
		</nav>
	);
}

function FilterBar() {
	return (
		<div class='d-flex p-2'>
			<div className='d-flex gap-2 flex-grow-1 '>
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
			<div className='flex-shrink-1'>
				<button type='button' class='btn btn-primary'>
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
				<div class='btn-group'>
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
		<div className='container d-inline-flex flex-wrap justify-content-start gap-3'>
			{props.products &&
				props.products.length > 0 &&
				props.products.map(p => (
					<ProductCard
						key={p.marketplace + '#' + p.title}
						title={p.title}
						rating={p.rating}
						imgSrc={p.imgSrc}
						marketplace={p.marketplace}
						price={p.price}
						currency={p.currency}
						productURL={p.productURL}
					/>
				))}
		</div>
	);
}

function ProductCard({ title, rating, imgSrc, marketplace, price, currency, productURL }) {
	const finalRating = Math.round(rating);
	return (
		<div class='card mx-2 flex-grow-1' style={{ maxWidth: '280px' }}>
			<div class='card-body'>
				<img src={imgSrc} class='card-img-top' alt={title + ' from ' + marketplace} />
				<h5 class='card-title'>{title}</h5>
				<p class='card-text'>
					<div class='ratings'>
						{Array(5)
							.fill()
							.map((e, i) => i < finalRating)
							.map(v =>
								v ? (
									<ion-icon name='star'></ion-icon>
								) : (
									<ion-icon name='star-outline'></ion-icon>
								)
							)}
						<h5 class='review-count'>12 Reviews</h5>
					</div>
				</p>
				<a href='#' class='btn btn-primary'>
					Go somewhere
				</a>
			</div>
		</div>
	);
}

function Search() {
	return <input type='text' placeholder='What are you looking for?' />;
}

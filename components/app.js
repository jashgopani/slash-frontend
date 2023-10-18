function App({}) {
	return (
		<>
			<div class='d-flex flex-column'>
				<Navbar />
				<FilterBar />
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
						{props.options.map(i => (
							<li key={i}>
								<a class='dropdown-item' href='#'>
									{i}
								</a>
							</li>
						))}
					</ul>
				</div>
			);
		default:
			return <></>;
	}
}

function Search() {
	return <input type='text' placeholder='What are you looking for?' />;
}

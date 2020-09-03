import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//actions
import { getAllCategories } from '../../store/actions/categories';
import { getAllProducts } from '../../store/actions/products';
import { selectCategoriesData, selectCategoriesLoading } from '../../store/selectors/categories';
import { selectProductsData } from '../../store/selectors/products';

// components
import Layout from '../../components/Layout/Layout';
import Slider from '../../components/Slider/Slider';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import ShowAllProductsButton from '../../components/ShowAllProductsButton/ShowAllProductsButton';
import WithSpinner from '../../components/WithSpinner/WithSpinner';

const CategoriesSection = ({ categories }) => (
	<div className='container-fluid container-min-max-width'>
		<Slider />
		<CategoriesList categories={categories} />
		<ShowAllProductsButton />
	</div>
);

const CategoriesSectionWithSpinner = WithSpinner(CategoriesSection);

class Home extends React.Component {
	componentDidMount() {
		const { categories, getAllCategories } = this.props;
		if (categories.length === 0) getAllCategories();
	}

	render() {
		const { categoriesLoading, categories } = this.props;
		return (
			<Layout title='Home'>
				<CategoriesSectionWithSpinner isLoading={categoriesLoading} categories={categories} />
			</Layout>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	categories: selectCategoriesData,
	products: selectProductsData,
	categoriesLoading: selectCategoriesLoading
});

function mapDispatchToProps(dispatch) {
	return {
		getAllCategories: () => {
			dispatch(getAllCategories());
		},
		getAllProducts: () => {
			dispatch(getAllProducts());
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { setSearchText, setFilterOption, setFilteredItemIds } from '@/redux/slices/searchSlice';
import { WaitingApprovalCards } from '@/pages/HomePage/data/mock__data';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownVisible: false
        };

        this.dropdownRef = React.createRef();
        this.dispatch = props.dispatch;
        this.searchText = props.searchText;
        this.filterOption = props.filterOption;

        // Binding methods
        this.filterItems = this.filterItems.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.handleFilterSelect = this.handleFilterSelect.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(event) {
        if (this.dropdownRef.current && !this.dropdownRef.current.contains(event.target)) {
            this.setState({ dropdownVisible: false });
        }
    }

    // Function to filter items based on current search text and filter option
    filterItems(text, option) {
        if (!text) {
            this.dispatch(setFilteredItemIds([]));
            return;
        }

        const filteredIds = WaitingApprovalCards
            .filter(item => {
                // Filter by type (if not "Bütün")
                const typeMatches = option === 'Bütün' ||
                    (option === 'Layihələr' && item.type === 'project') ||
                    (option === 'Mentoriumlar' && item.type === 'mentorium');

                // Filter by search text (check in title and description)
                const textMatches =
                    item.title.toLowerCase().includes(text.toLowerCase()) ||
                    item.topicDescription.toLowerCase().includes(text.toLowerCase());

                return typeMatches && textMatches;
            })
            .map(item => item.id); // Only extract IDs from filtered items

        this.dispatch(setFilteredItemIds(filteredIds));
    }

    // Toggle dropdown visibility
    toggleDropdown() {
        this.setState(prevState => ({
            dropdownVisible: !prevState.dropdownVisible
        }));
    }

    // Handle filter option selection
    handleFilterSelect(option) {
        this.dispatch(setFilterOption(option));
        this.setState({ dropdownVisible: false });
        // Re-filter items with the new option
        this.filterItems(this.props.searchText, option);
    }

    // Handle input change
    handleSearchChange(e) {
        const value = e.target.value;
        this.dispatch(setSearchText(value));
        // Filter items with the new search text
        this.filterItems(value, this.props.filterOption);
    }

    // Handle search submit
    handleSearchSubmit(e) {
        e.preventDefault();
        console.log("Searching for:", this.props.searchText, "with filter:", this.props.filterOption);
        // Re-filter items on submit (optional)
        this.filterItems(this.props.searchText, this.props.filterOption);
    }

    render() {
        return (
            <div className="search-container">
                <form onSubmit={this.handleSearchSubmit} className="search">
                    <input
                        type="text"
                        value={this.props.searchText}
                        onChange={this.handleSearchChange}
                        placeholder='Layihə və mentorium axtar'
                        className="search-input"
                    />

                    <div className="btn-dropdown">
                        <div className="dropdown" ref={this.dropdownRef}>
                            <p onClick={this.toggleDropdown}>
                                {this.props.filterOption} <IoMdArrowDropdown />
                            </p>
                            {this.state.dropdownVisible && (
                                <ul className="dropdown-list">
                                    <li onClick={() => this.handleFilterSelect('Bütün')}>Bütün</li>
                                    <li onClick={() => this.handleFilterSelect('Layihələr')}>Layihələr</li>
                                    <li onClick={() => this.handleFilterSelect('Mentoriumlar')}>Mentoriumlar</li>
                                </ul>
                            )}
                        </div>
                        <button type="submit" className="search-icon">
                            <CiSearch />
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

// Wrapper function component to connect to Redux
function SearchBarContainer() {
    const dispatch = useDispatch();
    const { searchText, filterOption } = useSelector(state => state.search);

    return <SearchBar
        dispatch={dispatch}
        searchText={searchText}
        filterOption={filterOption}
    />;
}

export default SearchBarContainer;
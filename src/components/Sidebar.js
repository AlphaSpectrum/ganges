import React from 'react';
import PropTypes from 'prop-types';

const sidebar = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  // zIndex: 100, // Behind the navbar
  padding: '40px 0 0', // Height of navbar
  boxShadow: 'inset -1px 0 0 rgba(0, 0, 0, .1)',
};

const sidebarSticky = {
  position: 'relative',
  top: 0,
  height: 'calc(100vh - 48px)',
  paddingTop: '3.5rem',
  overflowX: 'hidden',
  overflow: 'auto', // Scrollable contents if viewport is shorter than content.
};

/**
 * A component that renders an HTML sidebar.
 *
 * @version 1.0
 * @author [Alan Campos]
 *
 */
const Sidebar = ({
	                 children, breakpoint, size, bgColor, className, id, style,
}) => (
  <nav
    className={`col-${breakpoint}-${size} d-none d-${breakpoint}-block ${bgColor} ${className}`}
    style={sidebar}
    id={id}
  >
    <div
      style={sidebarSticky}
    >
      {children}
    </div>
  </nav>
);

Sidebar.propTypes = {
  /**
	 * The background color.
	 */
  bgColor: PropTypes.string,
  /**
	 * The width of the sidebar.
	 */
  breakpoint: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  /**
	 * The inner HTML elements.
	 */
  children: PropTypes.node,
  /**
	 * The CSS class.
	 */
  className: PropTypes.string,
  /**
	 * The id of the element.
	 */
  id: PropTypes.string,
  /**
	 * The width of the column.
	 * <table class="table table-bordered table-striped">
	 <thead>
	 <tr>
	 <th></th>
	 <th class="text-center">
	 Extra small<br>
	 <small><576px</small>
	 </th>
	 <th class="text-center">
	 Small<br>
	 <small>≥576px</small>
	 </th>
	 <th class="text-center">
	 Medium<br>
	 <small>≥768px</small>
	 </th>
	 <th class="text-center">
	 Large<br>
	 <small>≥992px</small>
	 </th>
	 <th class="text-center">
	 Extra large<br>
	 <small>≥1200px</small>
	 </th>
	 </tr>
	 </thead>
	 <tbody>
	 <tr>
	 <th class="text-nowrap" scope="row">Max container width</th>
	 <td>None (auto)</td>
	 <td>540px</td>
	 <td>720px</td>
	 <td>960px</td>
	 <td>1140px</td>
	 </tr>
	 <tr>
	 <th class="text-nowrap" scope="row">Class prefix</th>
	 <td><code>.col-</code></td>
	 <td><code>.col-sm-</code></td>
	 <td><code>.col-md-</code></td>
	 <td><code>.col-lg-</code></td>
	 <td><code>.col-xl-</code></td>
	 </tr>
	 <tr>
	 <th class="text-nowrap" scope="row"># of columns</th>
	 <td colspan="5">12</td>
	 </tr>
	 <tr>
	 <th class="text-nowrap" scope="row">Gutter width</th>
	 <td colspan="5">30px (15px on each side of a column)</td>
	 </tr>
	 <tr>
	 <th class="text-nowrap" scope="row">Nestable</th>
	 <td colspan="5">Yes</td>
	 </tr>
	 <tr>
	 <th class="text-nowrap" scope="row">Column ordering</th>
	 <td colspan="5">Yes</td>
	 </tr>
	 </tbody>
	 </table>
	 */
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12]),
};

Sidebar.defaultProps = {
  breakpoint: 'md',
  size: '2',
  bgColor: 'bg-light',
  children: null,
  className: '',
  id: '',
};

export default Sidebar;

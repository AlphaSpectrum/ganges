import React from 'react';
import PropTypes from 'prop-types';

/**
 * A component that renders breakpoint-specific column classes for easy
 * column sizing without an explicit numbered class like <code>.col-sm-6</code>
 *
 * @version 1.0
 * @author [Alan Campos]
 */
const Col = ({
	             children, size, breakpoint, className, id, style,
}) => (
  <div
    id={id}
    className={`col col-${breakpoint}-${size} ${className}`}
    style={style}
  >
    {children}
  </div>
);

Col.propTypes = {
  /**
	 * The size of the column.
	 */
  breakpoint: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  /**
	 * HTML elements.
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
  /**
	 * The inline HTML styles.
	 */
  style: PropTypes.object,
};

Col.defaultProps = {
  size: 12,
  breakpoint: 'md',
  children: null,
  className: '',
  id: '',
  style: null,
};

export default Col;

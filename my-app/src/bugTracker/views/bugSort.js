import React from 'react';
export const BugSort = () => (
    <section className="sort">
        <label htmlFor="">Order By :</label>
        <select>
            <option value="name">Name</option>
            <option value="isClosed">Status</option>
            <option value="createdAt">Created</option>
        </select>
        <label htmlFor="">Descending ? :</label>
        <input type="checkbox"/>
    </section>
);
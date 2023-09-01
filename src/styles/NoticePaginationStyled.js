import styled from "styled-components";

export const PaginationStyle = styled.div`
    .pagination {
        display: flex;
        justify-content: center;
        margin-top: 10vh;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    ul.pagination li {
        display: inline-block;
        width: 30px;
        height: 30px;
        margin: 1px;
        /* border: 2px solid #2d6dcc; */

        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;

        background-color: #fbfbfb;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.05);

        border-radius: 50%;
    }
    ul.pagination li:hover {
        background-color: #eeeeee;
    }

    ul.pagination li:first-child,
    ul.pagination li:last-child {
        border-radius: 50%;
    }
    ul.pagination li:first-child:hover,
    ul.pagination li:last-child:hover {
        background-color: #eeeeee;
    }

    ul.pagination li a {
        text-decoration: none;
        color: #8c8c8c;
        font-size: 1rem;
    }

    ul.pagination li.active a {
        color: #fbfbfb;
    }

    ul.pagination li.active {
        background-color: #2d6dcc;
        /* border: 2px solid #2d6dcc1e; */
    }

    ul.pagination li a:hover,
    ul.pagination li a.active {
        /* color: #2d6dcc; */
        /* color: #204782; */
    }

    .page-selection {
        width: 48px;
        height: 30px;
        color: #337ab7;
    }
`;

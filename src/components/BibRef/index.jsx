import React from 'react';
import styles from './styles.module.css';
import Tooltip from '@mui/material/Tooltip';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { bibItems } from './bibliography.js';

const { printMaterials, onlineMaterials } = bibItems;

export default function BibRef({
	children = '',
	id,
	pages = null,
	listAll = false,
}) {
	const requestID = id;
	const pagesReferenced = pages;

	const allMaterials = [...printMaterials, ...onlineMaterials];
	const sortedMaterials = allMaterials.sort((a, b) =>
		a.author.toUpperCase().localeCompare(b.author.toUpperCase())
	);
	const formattedMaterials = sortedMaterials.map((item, i) => {
		const indexedItem = { ...item, index: i + 1 };
		return indexedItem;
	});

	if (listAll) {
		const itemsToList = formattedMaterials.map(
			({ title, author, link, index }) => {
				return (
					<React.Fragment key={index}>
						<h4 id={index}>[{index}]</h4>
						<span>
							{author}. <em>{title}.</em>{' '}
							{link && (
								<a href={link} target="_blank">
									Visit <OpenInNewIcon fontSize="inherit" />
								</a>
							)}
						</span>
					</React.Fragment>
				);
			}
		);

		return <div className={styles}>{itemsToList}</div>;
	} else {
		let referencedItem = formattedMaterials.filter(
			(item) => item.id == requestID
		);

		if (referencedItem.length == 0) {
			return <span style={{ backgroundColor: 'red' }}>ITEM NOT FOUND</span>;
		} else {
			referencedItem = referencedItem[0];
			const { title, author, link, index, year } = referencedItem;
			return (
				<Tooltip
					title={
						<span>
							{author}.<em> {title}.</em> {year && `${year}.`}{' '}
							{pagesReferenced && `[${pagesReferenced}]`}{' '}
							{link && (
								<a href={link} target="_blank">
									Visit <OpenInNewIcon fontSize="inherit" />
								</a>
							)}{' '}
							{children && (
								<React.Fragment>
									<hr style={{ padding: 0, margin: 0 }} /> {children}
								</React.Fragment>
							)}{' '}
						</span>
					}
					placement="top"
					arrow>
					<a href={'/docs/reference-list#' + index}>[{index}]</a>
				</Tooltip>
			);
		}
	}
}

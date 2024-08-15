import { createPortal } from 'react-dom';
import './command-menu.css';
import { useEffect, useState } from 'react';

export function CommandMenu() {
	const [searchVisibility, setSearchVisibility] = useState(true);
	const [content, setContent] = useState(null);

	useEffect(() => {
		setContent(document.querySelector('.content'));
	}, []);

	useEffect(() => {
		if (!searchVisibility) return;
		function closeWhenPressEsc(e: KeyboardEvent) {
			const userWantsToClose = e.key === 'Escape';
			console.log(userWantsToClose);
			if (userWantsToClose) handleClose();
		}
		document.body.addEventListener('keydown', closeWhenPressEsc);
		return () =>
			document.body.removeEventListener('keydown', closeWhenPressEsc);
	}, [searchVisibility]);

	function handleClose() {
		setSearchVisibility(false);
	}

	function handleOpen() {
		setSearchVisibility(true);
	}
	return (
		<>
			<div className="command-menu__toggle_button" onClick={handleOpen}>
				<i className="fa fa-search"></i>
			</div>

			{content &&
				searchVisibility &&
				createPortal(
					<div className="command-menu__modal">
						<div className="command-menu__modal-content">
							<div className="command-menu__header">
								<div className="command-menu__magnifier-icon">
									<i className="fa fa-search" />
								</div>
								<input
									className="command-menu__search"
									placeholder="Pesquisar no menu"
								/>
								<div className="command-menu__close-button">
									<pre onClick={handleClose}>Esc</pre>
								</div>
							</div>
							<div className="command-menu__results">
								<div className="command-menu__section">
									<div className="command-menu__title">Painel Operacional</div>
									<div className="command-menu__link">
										<div className="command-menu__link-icon">
											<i className="fa fa-bars" />
										</div>
										<div className="command-menu__link-text">Manutenções</div>
									</div>
									<div className="command-menu__link">
										<div className="command-menu__link-icon">
											<i className="fa fa-bars" />
										</div>
										<div className="command-menu__link-text">Manutenções</div>
									</div>
									<div className="command-menu__link">
										<div className="command-menu__link-icon">
											<i className="fa fa-bars" />
										</div>
										<div className="command-menu__link-text">Manutenções</div>
									</div>
									<div className="command-menu__link">
										<div className="command-menu__link-icon">
											<i className="fa fa-bars" />
										</div>
										<div className="command-menu__link-text">Manutenções</div>
									</div>
									<div className="command-menu__link">
										<div className="command-menu__link-icon">
											<i className="fa fa-bars" />
										</div>
										<div className="command-menu__link-text">Manutenções</div>
									</div>
								</div>
							</div>
						</div>
					</div>,
					content
				)}
		</>
	);
}

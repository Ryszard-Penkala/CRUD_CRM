class ValidationError extends Error {
}

class NotFoundError extends Error {
}

function handleError(err, req, res, next) {
    if (err instanceof NotFoundError) {
        res
            .status(404)
            .render('error', {
                message: 'Nie można znaleźć elementu o danym ID',
            });
        return
    }

    console.log(err);

    res.status(err instanceof ValidationError ? 400 : 500);

    res.render('error', {
        message: err instanceof ValidationError ? err.message : 'Wystąpił błąd. Przepraszamy - spróbuj ponownie za jakiś czas.',
    });
}


module.exports = {
    handleError,
    ValidationError,
    NotFoundError,
}
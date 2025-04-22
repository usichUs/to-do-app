package errservice

import "errors"

var (
	ErrExistBase error = errors.New("exist in db")
	ErrNotExist  error = errors.New("not exist in db")
)

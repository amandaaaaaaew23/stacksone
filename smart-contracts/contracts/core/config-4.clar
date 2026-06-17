;; Config updated 2026-06-17T07:26:58Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u25)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)

;; Config updated 2026-06-17T07:52:35Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u27)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)

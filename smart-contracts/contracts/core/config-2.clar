;; Config updated 2026-06-12T08:56:19Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u7)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)
